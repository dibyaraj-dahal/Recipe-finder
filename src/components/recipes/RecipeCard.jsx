import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
function RecipeCard({recipe}){
    return (
        <div className="rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl overflow-hidden">
<img 
src={recipe.strMealThumb}
 alt={recipe.strMeal}
        className="h-68 w-full object-cover"
/>
 <div className="p-4">
        <h3 className="text-xl font-bold">
          {recipe.strMeal}
        </h3>

        <p className="mt-2 text-yellow-500">
          ⭐ {recipe.rating}
        </p>

       <Link
    to={`/recipe/${recipe.idMeal}`}
    className="mt-4 block rounded-lg bg-orange-600 py-2 text-center font-semibold text-white hover:bg-orange-700"
>
    View Recipe
</Link>
      </div>
      <div className="flex items-center justify-between">

  <FavoriteButton recipe={recipe} />

  <Link
    to={`/recipe/${recipe.idMeal}`}
    className="rounded-lg bg-orange-600 px-5 py-2 font-semibold text-white hover:bg-orange-700"
  >
    View Recipe
  </Link>

</div>

    </div>
        
    );
}
export default RecipeCard;