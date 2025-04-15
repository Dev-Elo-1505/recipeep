import { MdOutlineFastfood } from "react-icons/md";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
        <div className="flex items-center gap-1">
            <MdOutlineFastfood className="text-3xl text-primary" />
            <h1 className="text-2xl text-primary font-extralight">recipeep</h1>
        </div>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
