import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import FilterPanel from "../components/FilterPanel";
import RecipeModal from "../components/RecipeModal";
import Header from "../components/Header";

export default function Home() {
    
    return (
        <>
        <div className="justify-center items-center min-h-screen bg-gray-100">
           <Header />
            <div className="container mx-auto p-4">
            <SearchBar />
            <FilterPanel />
            <RecipeList />
            <RecipeModal />
        </div>
        </div>
        </>
    )
}