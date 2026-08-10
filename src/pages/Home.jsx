import { useState } from "react";
import Hero from "../home/Hero";
import CategoryCard from "../components/categories/CategoryCard";
import RecipeCard from "../components/recipes/RecipeCard";
import { searchRecipes } from "../services/recipeServices";



function Home(){
  const [recipes, setRecipes] = useState([]);
  const[searchTerm, setSearchTerm] = useState("");
  const[loading, setLoading] = useState(false);
  const handleSearch = async () => {
    if(searchTerm.trim()=="") return;
    setLoading(true);
    const data = await searchRecipes(searchTerm);
    setRecipes(data || []);
    setLoading(false);
  };


  return(<>
    <Hero
    searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}/>
         {loading && <p>Loading...</p>}
    <section className=" px-6 py-10">
        <h2 className=" text-2xl font-bold mb-4 text-center">
            Categories
        </h2>
         <div className="flex gap-8 overflow-x-auto px-2 pb-4 ">
<div className="shrink-0">
      <CategoryCard emoji="🍕" name="Pizza" />
    </div>

    <div className="shrink-0">
      <CategoryCard emoji="🍗" name="Chicken" />
    </div>

    <div className="shrink-0">
      <CategoryCard emoji="🥗" name="Salad" />
    </div>

    <div className="shrink-0">
      <CategoryCard emoji="🍰" name="Dessert" />
    </div>

    <div className="shrink-0">
      <CategoryCard emoji="🍔" name="Burger" />
    </div>

    

    <div className="shrink-0">
      <CategoryCard emoji="🐟" name="Fish" />
    </div>

    <div className="shrink-0">
      <CategoryCard emoji="🍛" name="Curry" />
    </div>

    <div className="shrink-0">
      <CategoryCard emoji="🍖" name="Mutton" />
    </div>

    <div className="shrink-0">
      <CategoryCard emoji="🍝" name="Pasta" />
    </div>
        </div>
    </section>
    <section className="bg-gray-50 px-6 py-10 ">
        <h2 className="text-center font-bold mb-6 text-2xl ">Popular Recipes</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
            />
          ))}
        </div>
    </section>
</>);
}
export default Home;