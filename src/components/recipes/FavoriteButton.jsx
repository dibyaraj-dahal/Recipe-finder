import { useState } from "react";
import {
  getFavorites,
  saveFavorites,
} from "../../utils/favorites";

function FavoriteButton({ recipe }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = getFavorites();

    return favorites.some(
      (item) => item.idMeal === recipe.idMeal
    );
  });

  const handleFavorite = () => {
    const favorites = getFavorites();

    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (item) => item.idMeal !== recipe.idMeal
      );

      saveFavorites(updatedFavorites);
      setIsFavorite(false);
    } else {
      saveFavorites([...favorites, recipe]);
      setIsFavorite(true);
    }
  };

  return (
    <button
      onClick={handleFavorite}
      className="text-3xl transition hover:scale-110 cursor-pointer"
     >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}

export default FavoriteButton;