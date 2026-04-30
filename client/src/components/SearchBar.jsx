import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex justify-center -mt-8 px-4">
      <div className="bg-white shadow-lg rounded-xl flex items-center px-4 py-3 w-full max-w-2xl">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Buscar eventos..."
          className="w-full outline-none px-3"
        />
      </div>
    </div>
  );
}

export default SearchBar;