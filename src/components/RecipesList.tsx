import axios from "axios";
import { useEffect, useState } from "react";

interface RecipeProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
}

const RecipesList = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      console.log(res.data.meals);
      setRecipes(res.data.meals);
    };
    fetchRecipes();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes?.map((meal) => (
        <div key={meal.idMeal} className="rounded-xl shadow-md p-4 bg-white">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-md hover:brightness-110 transition duration-300 ease-in-out"
          />
          <h2 className="font-bold mt-2">{meal.strMeal}</h2>
          <p className="text-sm text-gray-600">{meal.strCategory}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipesList;
