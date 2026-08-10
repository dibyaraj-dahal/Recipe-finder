

function CategoryCard( { emoji, name} ){
    return(
    <div className="rounded-xl bg-white p-6 text-center shadow-md">
      <div className="text-5xl ">{emoji}</div>

      <h3 className="mt-3 text-lg font-bold text-[#3b2118]">
        {name}
      </h3>
    </div>
    );
}
export default CategoryCard ;