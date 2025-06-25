import '../BoutonDropdown.css'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const recettes = [
  "Poulet rôti",
  "Poulet curry au riz et à la crème de curry",
  "Lasagnes à la bolognaise",
  "Curry aux légumes",
  "Gratin dauphinois",
  "Omelette",
  "Pizza Margherita",
  "Quiche lorraine",
  "Soupe aux légumes",
  "Tajine",
  "Chili Con Carne"
];

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;
    const formattedQuery = searchQuery.trim().toLowerCase().replace(/[^a-z0-9]/gi, "-");
    navigate(`/recette/${formattedQuery}`);
    setSearchQuery("");
    setSuggestions([]);
  };

  const onChangeSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 0) {
      const filtered = recettes.filter(r =>
        r.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (recette) => {
    const formatted = recette.toLowerCase();
    navigate(`/recette/${formatted}`);
    setSearchQuery("");
    setSuggestions([]);
  };

  return (
    <div className="w-full flex items-center gap-x-4 pt-3 pl-5 pb-3 bg-light-grey">
      <label className="burger w-10 flex flex-col justify-center cursor-pointer" htmlFor="burger">
        <input type="checkbox" id="burger" className="hidden" />
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </label>

      {/* Tes liens About / Recettes */}
      <div className="flex gap-x-5">
        <Link to="/about">About</Link>
        <Link to="/recette">Recettes</Link>
      </div>

      <div className="relative basis-1/2 max-w-lg">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Rechercher une recette..."
            value={searchQuery}
            onChange={onChangeSearch}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2"
          />
          <button
            type="submit"
            className="absolute top-1 right-1 flex items-center rounded bg-dark-grey py-1 px-2.5 text-white text-sm"
          >
            Rechercher
          </button>
        </form>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute bg-white border border-slate-200 w-full mt-1 max-h-48 overflow-auto rounded shadow z-10">
            {suggestions.map((recette, idx) => (
              <li
                key={idx}
                onClick={() => handleSuggestionClick(recette)}
                className="px-3 py-2 cursor-pointer hover:bg-gray-200"
              >
                {recette}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
