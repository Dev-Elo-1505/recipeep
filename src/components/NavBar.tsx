import { MdOutlineFastfood } from "react-icons/md";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
        <div className="flex items-center gap-1">
            <MdOutlineFastfood className="text-3xl text-primary" />
            <Link to={"/"} className="text-2xl text-primary font-extralight">recipeep</Link>
        </div>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
