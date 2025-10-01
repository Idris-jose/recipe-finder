import { useState } from "react"
import useRecipeStore from "../store/recipeStore"

export default function FavoritesList() {
  const { favorites, removeFavorite, getRecipeDetails } = useRecipeStore()
  const [removingId, setRemovingId] = useState<number | null>(null)

  const handleRemove = (id: number) => {
    setRemovingId(id)
      removeFavorite(id)
   
  }

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="text-6xl mb-4">♥</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          No favorites yet
        </h3>
        <p className="text-gray-500 text-center max-w-md">
          Start adding recipes to your favorites to see them here. Click the "+ Favorite" button on any recipe card.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          My Favorites
          <span className="ml-2 text-lg font-normal text-gray-500">
            ({favorites.length})
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {favorites.map((recipe) => (
          <div
            key={recipe.id}
            className={`border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
              removingId === recipe.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="relative group">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[3rem]">
                {recipe.title}
              </h3>

              <div className="flex gap-2">
                <button
                  onClick={() => getRecipeDetails(recipe.id)}
                  className="flex-1 bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
                >
                  View
                </button>
                <button
                  onClick={() => handleRemove(recipe.id)}
                  disabled={removingId === recipe.id}
                  className="flex-1 bg-red-500 text-white py-2 px-3 rounded hover:bg-red-600 transition-colors duration-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {removingId === recipe.id ? 'Removing...' : 'Remove'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}