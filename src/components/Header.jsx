import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DropDownNav from './DropDownNav';
import GreyBook from '../img/grey_book_logo.png'

const recettes = [
  "Poulet rôti",
  "Poulet curry au riz et à la crème de curry",
  "Lasagnes à la bolognaise",
  "Curry aux légumes",
  "Gratin dauphinois",
  "Omelette",
  "Pizza Margherita",
  "Quiche lorraine",
  "Soupe au melon",
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
      <div className="h-16 absolute top-0 z-10 w-full flex items-center justify-between bg-light-grey px-36">
        <DropDownNav />
        {/* Tes liens About / Recettes */}
      <div className='w-full fixed right-0 flex justify-center -z-10'>
        <img className='size-24' src={GreyBook} />
      </div>
      <div className="relative max-w-lg bg-dark-grey rounded-lg">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Recherche une recette"
            value={searchQuery}
            onChange={onChangeSearch}
            className="w-full bg-transparent placeholder:text-light-grey text-white text-sm rounded-lg pl-3 pr-24 py-2"
          />
          <button
            type="submit"
            className="absolute top-1 right-1 flex items-center rounded bg-light-grey py-1 px-2.5 text-black text-sm"
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
