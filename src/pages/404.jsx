import { useNavigate } from 'react-router-dom';
import sorcier from '../img/image404-sorcier-orage.png';

function Page404() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/')
  }

  return (
  <>
      <div className="bg-white flex justify-between items-center p-8">
        <div className="flex flex-col items-start">
          <h1 className="text-center font-bold text-7xl">Erreur 404</h1>
          <p className="text-3xl">Oulala! La page que vous cherchez n'existe pas!</p>
          <br />
          <p className="text-3xl mt-4">À la place vous avez trouvé le sorcier triste!</p>

          <p className="text-3xl">Laissez-moi vous ramener à un endroit plus sûr.</p>

          <button className="mt-10 text-white py-2 px-4 rounded bg-black hover:bg-gray-800" onClick={goHome}>
            Retourner à l'accueil
          </button>
        </div>
        <img src={sorcier} alt="image sorcier sous orage"/>
      </div>
  </>
  );
}

export default Page404;