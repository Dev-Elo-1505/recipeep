import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

interface RecipeProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
}

const RecipesList = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  useEffect(() => {
    const fetchRecipes = async () => { try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setRecipes(res.data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]); 
    }}
    fetchRecipes();
  }, [searchTerm]);

  if(!recipes.length) {
    return (
      <div className="text-center text-gray-500 mt-8">
        {searchTerm ? `No recipes found for "${searchTerm}"` : "Loading recipes..."}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes?.map((meal) => (
        <Link
          to={`/recipe/${meal.idMeal}`}
          key={meal.idMeal}
          className="rounded-xl shadow-md p-4 bg-white"
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-md hover:brightness-110 transition duration-300 ease-in-out"
          />
          <h2 className="font-bold mt-2">{meal.strMeal}</h2>
          <p className="text-sm text-gray-600">{meal.strCategory}</p>
        </Link>
      ))}
    </div>
  );
};

export default RecipesList;
