// I basically want people to view recipes and search for recipes.
// Milestones:
// 1. Route to the homepage so i can route to the details page
// 2. build nav and hero section [without searchbar]
// 3. fetch and display recipes
// 4. build recipe card
// 5. route to the recipe details page
// 6. build recipe details page
// 7. build search bar
// 8. build search results page

import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
