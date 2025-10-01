import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
  return (
    <header className="bg-orange-400 justify-between flex text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">Recipe Finder</h1>
         <button onClick={() => navigate("/favorites")} className=" bg-orange-300 text-white font-semibold px-4 py-2 rounded shadow ">
                        View Favorites 
        </button>
    </header>
  );
}