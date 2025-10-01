import { useState } from "react"
import useRecipeStore from "../store/recipeStore"

export default function SortDropdown() {
  const [cuisine, setCuisine] = useState("")
  const getRecipes = useRecipeStore((state) => state.getRecipes)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setCuisine(value)
    getRecipes(value) 
  }

  return (
    <div className="my-4">
      <select
        value={cuisine}
        onChange={handleChange}
        className="p-2 border rounded-md"
      >
        <option value="">All Cuisines</option>
        <option value="italian">Italian</option>
        <option value="mexican">Mexican</option>
        <option value="chinese">Chinese</option>
        <option value="indian">Indian</option>
      </select>
    </div>
  )
}
