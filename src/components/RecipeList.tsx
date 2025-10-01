import useRecipeStore from "../store/recipeStore"
import RecipeCard from "./RecipeCard"

export default function RecipeList() {
  const { recipes, loading, error } = useRecipeStore()

  if (loading) return <p className="text-center">Loading recipes...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>
  if (!recipes || recipes.length === 0) return <p className="text-center">No recipes found.</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}
