import { Link } from "react-router-dom";

export default function RecipesGrid({ recipes = [] }) {
  if (!recipes.length) {
    return (
      <div className="flex items-center justify-center py-16 text-gray-400 text-lg">
        No recipes found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {recipes.map((recipe) => (
        <Link
          to={`/recipe/${recipe.idMeal}`}
          key={recipe.idMeal}
          className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200"
        >
          <div className="overflow-hidden h-40">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3">
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
              {recipe.strMeal}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}