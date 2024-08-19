import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils";

const App_ID = import.meta.env.VITE_App_ID;
const App_Key = import.meta.env.VITE_App_Key;

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);
    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${App_ID}&app_key=${App_Key}&q=${searchQuery}&type=public`
      );
      const data = await res.json();
      setRecipes(data.hits);
      // console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value);
  };

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto ">
        <form onSubmit={handleSearchRecipe}>
          <label htmlFor="" className="input shadow-md flex items-center gap-2">
            <Search size={24} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>

        <p className="font-bold text-3xl md:text-5xl mt-4">
          Recommended Recipes
        </p>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular Choices
        </p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {/* <RecipeCard /> */}
          {!loading &&
            recipes.map(({ recipe }, index) => (
              <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
            ))}
          {loading &&
            [...Array(9)].map((_, index) => (
              <div className="flex w-52 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
