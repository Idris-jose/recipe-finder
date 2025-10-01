import axios from "axios"

const api = axios.create({
  baseURL: "https://api.spoonacular.com/recipes",
  params: { apiKey: import.meta.env.VITE_API_KEY }
})

export const fetchRecipes = async (
  query: string,
  filters?: { cuisine?: string; diet?: string; sort?: string }
) => {
  const { data } = await api.get("/complexSearch", { params: { query, number: 12, ...filters } })
  return data
}

export const fetchRecipeDetails = async(id: number) => {
    const { data } = await api.get(`/${id}/information`)
    return data
}