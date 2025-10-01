import { useState } from "react"
import useRecipeStore from "../store/recipeStore"
import RecipeModal from "../components/RecipeModal"
export default function FavoritesList() {
  const { favorites, removeFavorite, getRecipeDetails } = useRecipeStore()
  const [removingId, setRemovingId] = useState<number | null>(null)

  const handleRemove = (id: number) => {
    setRemovingId(id)
      removeFavorite(id)
      setRemovingId(null)
    
  }

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-7xl mb-4 text-red-400">♥</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          No favorites yet
        </h3>
        <p className="text-gray-500 text-center max-w-md">
          Start adding recipes to your favorites to see them here.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">
          My Favorites
          <span className="ml-3 text-xl font-normal text-gray-400">
            {favorites.length}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((recipe) => (
          <div
            key={recipe.id}
            className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 ${
              removingId === recipe.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-4 line-clamp-2 min-h-[3rem] text-lg">
                {recipe.title}
              </h3>

              <div className="flex gap-2">
                <button
                  onClick={() => getRecipeDetails(recipe.id)}
                  className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-md transition-colors font-medium"
                >
                  View Recipe
                </button>
                <button
                  onClick={() => handleRemove(recipe.id)}
                  disabled={removingId === recipe.id}
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors font-medium disabled:opacity-50"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
        <RecipeModal/>
    </div>
  )
}