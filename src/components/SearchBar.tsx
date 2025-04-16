import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
    }
  }
  return (
    <div className="flex items-center bg-search border rounded-full border-primary">
      <input
        className="w-full border-0 outline-0 p-2"
        type="search"
        value={searchTerm}
        placeholder="Search for recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="bg-primary text-white rounded-full p-2 cursor-pointer" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
