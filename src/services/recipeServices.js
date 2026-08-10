 const Base_URL="https://www.themealdb.com/api/json/v1/1";
export async function searchRecipes(query){
    try{
    const response= await fetch(`${Base_URL}/search.php?s=${query}`);
    const data= await response.json();
    return data.meals || [];}
    catch(error){
        console.error(error);
        return [];
    }
}
export const getRecipeById = async (id) => {
  try {
    const response = await fetch(`${Base_URL}/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};