import { useState, useRef } from "react";

function IngredientSearchBar({ searchBarWidth = "w-full max-w-md" }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [tags, setTags] = useState([]);
  const inputRef = useRef(null);

  const ingredients = [
    'Œuf', 'Oeuf', 'Oeufs', 'Salade', 'Tomate', 'Concombre', 'Carotte', 'Oignon', 'Poivron',
    'Avocat', 'Laitue', 'Radis', 'Maïs', 'Thon', 'Poulet', 'Fromage',
    'Pain', 'Croutons', 'Mozzarella', 'Olives', 'Vinaigrette', 'Riz', 'Pâtes',
    'Lentilles', 'Pois chiches', 'Haricots rouges', 'Saumon', 'Tofu', 'Crevettes',
    'Champignons', 'Courgette', 'Aubergine', 'Brocoli', 'Chou-fleur', 'Épinards',
    'Roquette', 'Betterave', 'Noix', 'Amandes', 'Noisettes',
    'Graines de tournesol', 'Graines de courge', 'Feta', 'Parmesan', 'Ricotta',
    'Yaourt nature', 'Mayonnaise', 'Moutarde', 'Huile d’olive', 'Vinaigre balsamique',
    'Citron', 'Basilic', 'Persil', 'Coriandre', 'Menthe', 'Aneth',
    'Cornichons', 'Piments', 'Paprika', 'Curry', 'Sel', 'Poivre', 'Ketchup',
    'Sauce barbecue', 'Tabasco', 'Lait', 'Crème fraîche', 'Beurre', 'Pommes de terre',
    'Patate douce', 'Granola', 'Corn flakes', 'Avoine', 'Noix de coco râpée',
    'Navet', 'Topinambour', 'Céleri', 'Fenouil', 'Artichaut', 'Asperge',
    'Chou rouge', 'Chou vert', 'Chou chinois', 'Pois mange-tout', 'Haricots verts',
    'Mâche', 'Endive', 'Cresson', 'Tomme', 'Comté', 'Boursin', 'Raclette',
    'Anchois', 'Sardines', 'Truite', 'Morue', 'Palourdes', 'Moules', 'Calmars',
    'Encornets', 'Boulgour', 'Quinoa', 'Polenta', 'Semoule', 'Farine',
    'Pain de mie', 'Baguette', 'Tortilla', 'Galette', 'Wrap', 'Brioche',
    'Croissant', 'Pain complet', 'Pain de seigle', 'Toasts', 'Graines de sésame',
    'Graines de lin', 'Graines de chia', 'Ciboulette', 'Oseille', 'Laurier',
    'Thym', 'Romarin', 'Origan', 'Estragon', 'Gingembre', 'Ail', 'Échalote',
    'Câpres', 'Zeste de citron', 'Zeste d’orange', 'Miel', 'Sucre',
    'Sirop d’érable', 'Confiture', 'Compote', 'Pomme', 'Banane', 'Fraise',
    'Framboise', 'Myrtille', 'Cerise', 'Raisin', 'Orange', 'Clémentine',
    'Pamplemousse', 'Poire', 'Pêche', 'Nectarine', 'Kiwi', 'Mangue', 'Ananas',
    'Melon', 'Pastèque', 'Figues', 'Dattes', 'Pruneaux', 'Abricot sec',
  ];

  const colorTags = {
    cream: "bg-cream",
    red: "bg-red",
    yellow: "bg-yellow",
    green: "bg-light-green",
    pink: "bg-pink"
  };

  const randomColor = () => {
    const colorKeys = Object.keys(colorTags);
    const randomColorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    return colorTags[randomColorKey];
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filtered = ingredients.filter(ingredient =>
        ingredient.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 3);
      setFilteredIngredients(filtered);
    } else {
      setFilteredIngredients([]);
    }
  };

  const handleIngredientClick = (ingredient) => {
    if (!tags.some(tag => tag.name === ingredient)) {
      setTags([...tags, { name: ingredient, color: randomColor() }]);
    }
    setInputValue("");
    setFilteredIngredients([]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const inputTrimmed = inputValue.trim();
      // ça check si l'input matche avec l'ingrédient, si il n'existe pas alors on peut pas créer de tags
      const isValidIngredient = ingredients.some(ingredient =>
        ingredient.toLowerCase() === inputTrimmed.toLowerCase()
      );

      if (isValidIngredient && !tags.some(tag => tag.name === inputTrimmed)) {
        setTags([...tags, { name: inputTrimmed, color: randomColor() }]);
      }
      setInputValue("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter(tag => tag.name !== tagToRemove));
  };

  return (
    <div className={`mx-auto ${searchBarWidth}`}>
      <div className="relative">
        <input
          className="border-transparent bg-dark-grey w-full placeholder:text-white/70 text-white text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Entre tes ingrédients ici"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button
          className="duration-1000 ease-in-out hover:scale-105 h-6 absolute top-[18%] right-5 flex items-center rounded-xl bg-light-grey py-1 px-2.5 border border-transparent text-center text-sm transition-all shadow-sm hover:bg-light-green active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Rechercher
        </button>
        {filteredIngredients.length > 0 && (
          <div className="absolute z-10 mt-1 w-full text-white bg-dark2-grey border-grey-300 rounded-md grey-lg">
            {filteredIngredients.map((ingredient, index) => (
              <div
                key={index}
                className="p-2 cursor-pointer hover:bg-medium-grey"
                onClick={() => {handleIngredientClick(ingredient)}}
              >
                {ingredient}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-wrap mt-2">
        {tags.map((tag, index) => (
          <div key={index} className={`tags flex justify-center items-center rounded-full px-3 py-1 m-1 ${tag.color}`}>
            <span className="mr-2">{tag.name}</span>
            <button onClick={() => handleTagRemove(tag.name)} className="flex items-center justify-center">
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientSearchBar;