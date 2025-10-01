import { useState } from "react"
import useRecipeStore from "../store/recipeStore"

export default function FilterPanel() {
  const [cuisine, setCuisine] = useState("")
  const [diet, setDiet] = useState("")
  const [sort, setSort] = useState("")
  const { getRecipes, clearFilters, loading } = useRecipeStore()

  const handleApplyFilters = () => {
      getRecipes(undefined, {  
      cuisine: cuisine || undefined,
      diet: diet || undefined,
      sort: sort || undefined
    })
  }

  const handleClearFilters = () => {
    setCuisine("")
    setDiet("")
    setSort("")
    clearFilters()
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 my-4">
      <select
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        className="p-2 border rounded-md bg-orange-200 text-orange-600 border-amber-600"
        disabled={loading}
      >
        <option value="">All Cuisines</option>
        <option value="italian">Italian</option>
        <option value="mexican">Mexican</option>
        <option value="chinese">Chinese</option>
        <option value="indian">Indian</option>
      </select>

      <select
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
        className="p-2 border rounded-md bg-orange-200 text-orange-600 border-amber-600"
        disabled={loading}
      >
        <option value="">All Diets</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="ketogenic">Ketogenic</option>
        <option value="paleo">Paleo</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="p-2 border rounded-md bg-orange-200 text-orange-600 border-amber-600"
        disabled={loading}
      >
        <option value="">Default Sort</option>
        <option value="popularity">Popularity</option>
        <option value="healthiness">Healthiness</option>
        <option value="price">Price</option>
      </select>

      <button
        onClick={handleApplyFilters}
        disabled={loading}
        className="bg-orange-600 text-white px-4 py-2 rounded-md  disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Loading..." : "Apply Filters"}
      </button>

      {(cuisine || diet || sort) && (
        <button
          onClick={handleClearFilters}
          disabled={loading}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 disabled:opacity-50"
        >
          Clear Filters
        </button>
      )}
    </div>
  )
}