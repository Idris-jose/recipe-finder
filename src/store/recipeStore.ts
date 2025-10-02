import { create } from "zustand"
import { fetchRecipes, fetchRecipeDetails } from "../lib/api"
import type { Recipe, RecipeState, Filters } from "../types"

// in-memory cache for API responses
const cache = new Map<string, any>()

const generateCacheKey = (query: string, filters: Filters, page: number) => {
  return JSON.stringify({ query, filters, page })
}


const FAVORITES_KEY = "favorites"

const loadFavorites = (): Recipe[] => {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(FAVORITES_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

const saveFavorites = (favorites: Recipe[]) => {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  } catch {
  }
}

const useRecipeStore = create<RecipeState>((set, get) => ({
  recipes: [],
  favorites: loadFavorites(),
  selectedRecipe: null,
  loading: false,
  error: null,
  currentFilters: {},
  currentQuery: "",
  currentPage: 1,
  totalPages: 1,

  // Fetch recipes
 getRecipes: async (query: string = "", filters?: Filters, page: number = 1) => {
  set({ loading: true, error: null })
  try {
    const appliedFilters = filters ?? get().currentFilters
    const appliedQuery = query !== "" ? query : get().currentQuery

    const cacheKey = generateCacheKey(appliedQuery, appliedFilters, page)
    if (cache.has(cacheKey)) {
      const cachedData = cache.get(cacheKey)
      set({
        recipes: cachedData.results,   
        loading: false,
        currentFilters: appliedFilters,
        currentQuery: appliedQuery,
        currentPage: page,
        totalPages: Math.ceil(cachedData.totalResults / 12)
      })
      return
    }

    const data = await fetchRecipes(appliedQuery, { ...appliedFilters, offset: (page - 1) * 12, number: 12 }as Filters & { offset: number; number: number })
    cache.set(cacheKey, data)

    set({
      recipes: data.results,          
      loading: false,
      currentFilters: appliedFilters,
      currentQuery: appliedQuery,
      currentPage: page,
      totalPages: Math.ceil(data.totalResults / 12)
    })
  } catch (err) {
    set({
      error: err instanceof Error ? err.message : "Failed to fetch recipes",
      loading: false
    })
  }
},


  // Fetch details
  getRecipeDetails: async (id: number) => {
    set({ loading: true, error: null })
    try {
      const cacheKey = `recipe_${id}`
      if (cache.has(cacheKey)) {
        set({ selectedRecipe: cache.get(cacheKey), loading: false })
        return
      }
      const data = await fetchRecipeDetails(id)
      cache.set(cacheKey, data)
      set({ selectedRecipe: data, loading: false })
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Failed to fetch recipe details",
        loading: false
      })
    }
  },

  // Favorites to localStorage
  addFavorite: (recipe: Recipe) =>
    set((state) => {
      if (state.favorites.some(fav => fav.id === recipe.id)) return state
      const updated = [...state.favorites, recipe]
      saveFavorites(updated)
      return { favorites: updated }
    }),

  removeFavorite: (id: number) =>
    set((state) => {
      const updated = state.favorites.filter((r) => r.id !== id)
      saveFavorites(updated)
      return { favorites: updated }
    }),

  // Clear selection
  clearSelectedRecipe: () => set({ selectedRecipe: null }),

  // Reset filters
  clearFilters: () => {
    set({ currentFilters: {} })
    get().getRecipes(get().currentQuery, {}, 1)
  }
}))

export default useRecipeStore
