import { create } from "zustand"
import { fetchRecipes, fetchRecipeDetails } from "../lib/api"
import type { Recipe, RecipeState, Filters } from "../types"


const useRecipeStore = create<RecipeState>((set, get) => ({
  recipes: [],
  favorites: [],
  selectedRecipe: null,
  loading: false,
  error: null,
  currentFilters: {},
  currentQuery: "",

  getRecipes: async (query: string = "", filters?: Filters) => {
    set({ loading: true, error: null })
    try {
      const appliedFilters = filters ?? get().currentFilters
      const appliedQuery = query !== "" ? query : get().currentQuery

      const data = await fetchRecipes(appliedQuery, appliedFilters)

      set({ 
        recipes: data.results, 
        loading: false,
        currentFilters: appliedFilters,
        currentQuery: appliedQuery
      })
    } catch (err) {
      set({ 
        error: err instanceof Error ? err.message : "Failed to fetch recipes", 
        loading: false 
      })
    }
  },

  getRecipeDetails: async (id: number) => {
    set({ loading: true, error: null })
    try {
      const data = await fetchRecipeDetails(id)
      set({ selectedRecipe: data, loading: false })
    } catch (err) {
      set({ 
        error: err instanceof Error ? err.message : "Failed to fetch recipe details", 
        loading: false 
      })
    }
  },

  addFavorite: (recipe: Recipe) =>
    set((state) => {
      if (state.favorites.some(fav => fav.id === recipe.id)) {
        return state
      }
      return { favorites: [...state.favorites, recipe] }
    }),

  removeFavorite: (id: number) =>
    set((state) => ({
      favorites: state.favorites.filter((r) => r.id !== id)
    })),

  clearSelectedRecipe: () => set({ selectedRecipe: null }),

  clearFilters: () => {
    set({ currentFilters: {} })
    get().getRecipes(get().currentQuery, {})
  }
}))

export default useRecipeStore
