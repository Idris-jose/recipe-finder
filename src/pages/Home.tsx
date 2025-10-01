import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import FilterPanel from "../components/FilterPanel";
import RecipeModal from "../components/RecipeModal";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto p-4">
            <button onClick={() => navigate("/favorites")} className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
                View Favorites 
            </button>
            <h1 className="text-3xl font-bold mb-6 text-center">Recipe Finder</h1>
            <SearchBar />
            <FilterPanel />
            <RecipeList />
            <RecipeModal />
        </div>
    );
}