import Carousel from '../components/Carousel';

function Categorie ( {categorieName} ) {
    return (
    <>
        <h1 className='bg-dark-grey text-lighter-grey text-lg rounded-full py-2 w-1/5 text-center mt-20'>{categorieName}</h1>
        <Carousel 
          carouselType={"smallCards"}
          displayIngredients={"collapse"}
        />
    </>
    );
}

export default Categorie;