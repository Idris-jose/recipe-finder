import { useEffect } from "react"
import useRecipeStore from "../store/recipeStore"

export default function RecipeModal() {
  const { selectedRecipe, clearSelectedRecipe } = useRecipeStore()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') clearSelectedRecipe()
    }
    
    if (selectedRecipe) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedRecipe, clearSelectedRecipe])

  if (!selectedRecipe) return null



  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden relative">
        <button
          onClick={clearSelectedRecipe}
          className="absolute top-4 right-4 bg-orange-400 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md  z-10"
        >
          ✕
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {selectedRecipe.title}
            </h2>

            {selectedRecipe.extendedIngredients && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Ingredients</h3>
                <ul className="space-y-2">
                  {selectedRecipe.extendedIngredients.map((ing: any) => (
                    <li key={ing.id} className="text-gray-700 pl-4 border-l-2 border-green-500">
                      {ing.original}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Instructions</h3>
              <div className="text-gray-700 leading-relaxed">
                {selectedRecipe.instructions?.replace(/<[^>]*>/g, '') || "No instructions available."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}