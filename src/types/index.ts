export interface Recipe {
  id: number
  title: string
  image: string
  instructions?: string
  extendedIngredients?: any[]
}

export interface Filters {
  cuisine?: string
  diet?: string
  sort?: string
}

export interface RecipeState {
  recipes: Recipe[]
  favorites: Recipe[]
  selectedRecipe: Recipe | null
  loading: boolean
  error: string | null
  currentFilters: Filters
  currentQuery: string
  getRecipes: (query?: string, filters?: Filters) => Promise<void>
  getRecipeDetails: (id: number) => Promise<void>
  addFavorite: (recipe: Recipe) => void
  removeFavorite: (id: number) => void
  clearSelectedRecipe: () => void
  clearFilters: () => void
}