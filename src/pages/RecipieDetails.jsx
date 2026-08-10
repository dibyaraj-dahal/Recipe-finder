import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeById } from "../services/recipeServices";

function RecipieDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRecipe = async () => {
    try {
      const data = await getRecipeById(id);
      setRecipe(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!recipe) {
    return <p>Recipe Not Found</p>;
  }

  const getIngredients = () => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({
          ingredient,
          measure,
        });
      }
    }

    return ingredients;
  };

  return (
    <div className="mx-auto max-w-6xl p-10">

      {/* Recipe title */}
      <h1 className="text-5xl font-bold">
        {recipe.strMeal}
      </h1>

      {/* Category */}
      <p className="mt-4 text-lg">
        Category: {recipe.strCategory}
      </p>

      {/* Area */}
      <p className="text-lg">
        Area: {recipe.strArea}
      </p>

      {/* Ingredients */}
      <h2 className="mt-8 mb-4 text-3xl font-bold">
        Ingredients
      </h2>

      <div className="space-y-3">

        {getIngredients().map((item, index) => (
          <div
            key={index}
            className="flex justify-between rounded-lg bg-orange-50 p-3"
          >
            <span>
              🍴 {item.ingredient}
            </span>

            <span>
              {item.measure}
            </span>
          </div>
        ))}

      </div>

      {/* Instructions */}
      <h2 className="mt-10 text-3xl font-bold">
        Instructions
      </h2>

      <p className="mt-4 whitespace-pre-line text-lg leading-8 text-gray-700">
        {recipe.strInstructions}
      </p>

      {/* YouTube */}
     {recipe.strYoutube && (
  <a
    href={recipe.strYoutube}
    target="_blank"
    rel="noreferrer"
    className="mt-6 inline-block rounded-lg bg-red-500 px-5 py-3 font-semibold text-white hover:bg-red-600"
  >
    ▶ Watch Recipe Video
  </a>
)}

    </div>
  );
}

export default RecipieDetails;