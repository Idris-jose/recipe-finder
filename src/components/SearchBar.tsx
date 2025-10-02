import { useState, useEffect } from "react"
import useDebounce from "../hooks/useDebounce"
import useRecipeStore from "../store/recipeStore"
import { Search } from 'lucide-react'

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
<div className="w-full flex justify-center">
  <div className="max-w-4xl w-full flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-orange-500 shadow-sm mb-6">
    <Search className="text-orange-600 w-5 h-5" />
    <input
      type="text"
      className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
      placeholder="Search for recipes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
</div>


   )

}