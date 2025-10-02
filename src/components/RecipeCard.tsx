import { useState } from "react"
import useRecipeStore from "../store/recipeStore"
import { Heart } from 'lucide-react';

interface RecipeCardProps {
  recipe: {
    id: number
    title: string
    image: string
  }
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const [isAdding, setIsAdding] = useState(false)
  const getRecipeDetails = useRecipeStore((state) => state.getRecipeDetails)
  const addFavorite = useRecipeStore((state) => state.addFavorite)
  const favorites = useRecipeStore((state) => state.favorites)
  
  const isFavorited = favorites.some(fav => fav.id === recipe.id)

  const handleAddFavorite = () => {
    if (isFavorited) return
    
    setIsAdding(true)
    addFavorite(recipe)
    
  }

  return (
    <div className="border border-gray-300 max-w-4xl mt-5 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {isFavorited && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-2 rounded-full text-xs font-semibold">
            <Heart/> 
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3 line-clamp-2 min-h-[3.5rem]">
          {recipe.title}
        </h2>
        

        <div className="flex gap-2 flex-col w-full">
          <button 
            onClick={() => getRecipeDetails(recipe.id)} 
            className="flex-1 bg-orange-500 text-white py-2 px-3 rounded  transition-colors duration-200 font-medium"
          >
            View Recipe
          </button>
          
          <button 
            onClick={handleAddFavorite}
            disabled={isFavorited}
            className={`flex-1 py-2 px-3 rounded font-medium transition-all duration-200 ${
              isFavorited 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : isAdding
                ? 'bg-green-600 text-white scale-95'
                : 'bg-red-700 text-white hover:bg-red-800'
            }`}
          >
            {isFavorited ? 'Favorited' : isAdding ? 'Adding...' : 'Add to Favorite'}
          </button>
        </div>
      </div>
    </div>
  )
}