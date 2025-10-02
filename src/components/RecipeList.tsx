import useRecipeStore from "../store/recipeStore"
import RecipeCard from "./RecipeCard"
import RecipeSkeleton from "./RecipeSkeleton"

export default function RecipeList() {
  const { recipes, loading, error, currentQuery, currentPage, totalPages, getRecipes, currentFilters } = useRecipeStore()

  if (loading) return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <RecipeSkeleton key={index} />
      ))}
    </div>
  )
  if (error) return <p className="text-center text-red-500">{error}</p>
  if (!currentQuery.trim() && (!recipes || recipes.length === 0)) return <p className="text-center">Search for something.</p>
  if (currentQuery.trim() && (!recipes || recipes.length === 0)) return <p className="text-center">No recipes found.</p>

  return (
    <div className="space-y-8">
      {/* Recipes grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => getRecipes(currentQuery, currentFilters, currentPage - 1)}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => getRecipes(currentQuery, currentFilters, currentPage + 1)}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
