 function Hero({ searchTerm, setSearchTerm, handleSearch }) {



  return (

    <section className="bg-[#f6ebe2] px-5 py-16 text-center">



      <p className="text-7xl">🧑‍🍳</p>



      <h1 className="text-5xl font-bold text-[#3b2118]">

        Recipe Finder

      </h1>



      <p className="mt-3 text-xl text-gray-600">

        Find your favourite Recipe Here 👇

      </p>



      <div className="mx-auto mt-8 flex w-full max-w-2xl items-center overflow-hidden rounded-full border-2 border-[#ead8ca] bg-white p-1">



        <input

          type="text"

          placeholder="Search Recipe Here..."
          value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}

          className="min-w-0 flex-1 rounded-full px-4 py-3 text-lg outline-none"

        />



        <button  onClick={handleSearch} className="shrink-0 rounded-full bg-[#ed4b23] px-5 py-3 font-bold text-white transition hover:bg-red-400 sm:px-8 cursor-pointer">

          Search

        </button>



      </div>



    </section>

  );

}



export default Hero;