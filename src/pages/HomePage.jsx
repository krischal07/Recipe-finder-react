import { Heart, HeartPulse, Search, Soup } from "lucide-react";
import React from "react";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
  return (
    <div className="bg-[#faf9fb] p-10 flex-1 border border-red-600">
      <div className="max-w-screen-lg mx-auto border border-yellow-600">
        <form action="">
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
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-4 border-sky-400">
          <RecipeCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
