import { useEffect, useState } from "react";
import RecipeGrid from "../components/recipes/RecipesGrid";
import { getFavorites } from "../utils/favorites";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedRecipes = getFavorites();

    setFavorites(savedRecipes);
  }, []);

  return (
    <div className="min-h-screen px-6 py-10">

      <h1 className="mb-10 text-center text-4xl font-bold">
        My Favorites ❤️
      </h1>

      {favorites.length === 0 ? (
        <div className="py-20 text-center">

          <p className="text-6xl">🤍</p>

          <h2 className="mt-5 text-2xl font-semibold">
            No Favorites Yet
          </h2>

          <p className="mt-2 text-gray-500">
            Start adding recipes you love!
          </p>

        </div>
      ) : (
        <RecipeGrid recipes={favorites} />
      )}

    </div>
  );
}

export default Favorites;