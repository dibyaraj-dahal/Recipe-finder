const FAVORITES_KEY = "recipe-favorites";

export const getFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);

  return favorites ? JSON.parse(favorites) : [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(favorites)
  );
};