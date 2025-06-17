import { Link } from 'react-router-dom';
import Card from './Card'
import Lasagnes_img from '../img/lasagnes_img.jpg'
import React from 'react';

function Carousel() {
  return (
    <div className='w-full flex justify-center items-center p-[2%]'>
      <Card cardImg={Lasagnes_img} reciepName='Lasagnes' nbPeople='4' reciepUrl='./404' ingredients='saké, mirin, soja, kelp, udon, algues, surimi, kamaboko, ciboule, flocons de bonite, jaune d’oeuf' />
      <Card cardImg={Lasagnes_img} reciepName='Lasagnes' nbPeople='4' reciepUrl='./404' ingredients='saké, mirin, soja, kelp, udon, algues, surimi, kamaboko, ciboule, flocons de bonite, jaune d’oeuf' />
      <Card cardImg={Lasagnes_img} reciepName='Lasagnes' nbPeople='4' reciepUrl='./404' ingredients='saké, mirin, soja, kelp, udon, algues, surimi, kamaboko, ciboule, flocons de bonite, jaune d’oeuf' />
    </div>
  );
}

export default Carousel;