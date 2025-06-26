import React from 'react';
import { Link } from 'react-router-dom';
import IngredientSearchBar from '../components/IngredientSearchBar';
import orange_wizard from '../img/wizard/wizard_orange.png';
import Categorie from '../components/Categorie';

function Recettes() {
  return (
    <>
      <div className='py-20 flex flex-col items-center justify-center bg-lighter-grey'>
        <img className='w-32 absolute top-4 right-3 z-20' src={orange_wizard}></img>
        <IngredientSearchBar 
          searchBarWidth="w-full max-w-[60%] min-w-[200px]"
        />
        <Categorie 
          categorieName="test1"
        />
        <Categorie 
          categorieName="test2"
        />
        <Categorie 
          categorieName="test3"
        />
        <Categorie 
          categorieName="test4"
        />
        <Categorie 
          categorieName="test5"
        />
        <Categorie 
          categorieName="test6"
        />
        <Categorie 
          categorieName="test7"
        />
        <Categorie 
          categorieName="test8"
        />
        <Categorie 
          categorieName="test9"
        />
        <Categorie 
          categorieName="test10"
        />
        <Categorie 
          categorieName="test11"
        />
      </div>
    </>
  );
}

export default Recettes;