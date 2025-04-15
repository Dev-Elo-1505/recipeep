import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface MealProps {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  [key: string]: any;
}

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState<MealProps | null>(null);
  useEffect(() => {
    const fetchMeal = async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setMeal(res.data.meals[0]);
    };
    fetchMeal();
  }, [id]);
  if (!meal)
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;

  const ingredients = Object.keys(meal)
    .filter((key) => key.startsWith("strIngredient") && meal[key])
    .map((key, index) => ({
      ingredient: meal[key],
      measure: meal[`strMeasure${index + 1}`],
    }));

  const embedYoutube = (url: string) => {
    if (!url) return null;
    const videoId = url.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        {meal?.strMeal}
      </h1>
      <div className="w-[500px] h-[500px] mx-auto mb-6">
      <img
        src={meal?.strMealThumb}
        alt={meal?.strMeal}
        className="w-full h-auto rounded-xl shadow-md mb-8"
      />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {ingredients.map((item, i) => (
              <li key={i}>
                {item.ingredient} - {item.measure}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Instructions</h2>
          <p className="text-gray-700 whitespace-pre-line leading-6">
            {meal.strInstructions}
          </p>
        </div>
      </div>

      {meal.strYoutube && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3 text-center">Watch Tutorial</h2>
          <div className="w-full max-w-2xl mx-auto">
            <div className="aspect-video rounded-md overflow-hidden shadow-md">
              <iframe
                src={embedYoutube(meal.strYoutube)}
                title={meal.strMeal}
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetailsPage;
