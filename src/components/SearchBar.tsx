import { useState, useEffect } from "react"
import useDebounce from "../hooks/useDebounce"
import useRecipeStore from "../store/recipeStore"

export default function SearchBar() {
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 600) 
  const { getRecipes } = useRecipeStore()

    useEffect(() => {
    if (debouncedSearch.trim()) {
      getRecipes(debouncedSearch)
    }
    }, [debouncedSearch, getRecipes])
    
   return (
    <div className="mb-6">
        <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Search for recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </div>
   )

}