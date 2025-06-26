import { Link } from 'react-router-dom';
import Recette from '../components/Recette'
import darkgreen_wizard from '../img/wizard/wizard_darkgreen.png';

function About() {
  return (
    <>
      <img className='w-32 absolute top-4 right-3 z-20' src={darkgreen_wizard}></img>
      <h1 className='w-full h-96 flex flex-col justify-center items-center text-7xl'>About</h1>
    </>
  );
}

export default About;