import Chrono from "./Chrono";
import Recette from "./Recette";
import { useParams } from "react-router-dom";
import PouletCurryImg from "../img/recettes/poulet_curry_img.jpg"
import LasagnesImg from "../img/lasagnes_img.jpg"
import CurryLegumesImg from "../img/curry_legumes_img.jpg"
import GratinAuphinoisImg from "../img/gratin_dauphinois_img.jpg"
import OmelletteImg from "../img/omellette_img.jpg"
import PizzaImg from "../img/pizza_margherita_img.jpeg"
import PouletRotiImg from "../img/poulet_roti.jpeg"
import QuicheLoraineImg from "../img/quiche_loraine_img.jpg"
import SoupeImg from "../img/soupe_img.jpg"
import TajinImg from "../img/tajine_img.jpg"
import ChiliConCarneImg from "../img/chili_con_carne_img.jpg"

function RecettesList() {
  const recettesList = [
  {
    nom: "Poulet Curry au riz et à la crème de curry",
    
    duree: 25,
    personnes: 4,
    image: PouletCurryImg,
    ingredients: [
      "1 cuillère à soupe de miel",
      "5 cuillères à soupe de curry",
      "1 oignon",
      "1 pot de crème fraîche (20 cl)",
      "sel",
      "4 escalopes de poulet",
      "1/2 citron",
      "riz"
    ],
      ustensiles: [
      "1 passoire",
      "1 set 3 poêles",
      "1 couteau",
      "1 économe",
      "1 cuillère en bois",
      "1 saladier"
    ],
    etapes: [
        "Éplucher et émincer les oignons. Les faire rissoler, dans une poêle légèrement huilée.",
        "Couper le poulet en fines lamelles. Le mettre dans la poêle.",
        "Rajouter le miel, le jus du citron et saupoudrer de curry (ne pas verser tout le curry). Laisser dans la poêle, jusqu'à ce que le poulet soit complètement cuit.",
        "Faire cuire le riz.",
        <div className="flex pt-4 pb-4">
          <Chrono MinutesCustom={15} />
        </div>,
        "Rajouter la crème fraîche au mélange, dans la poêle. Bien mélanger, puis mettre le reste de curry. Saler.",
        "Mélanger avec le riz et servir."
    ]
  },

    {
    nom: "Lasagnes à la bolognaise",
    duree: 45,
    personnes: 4,
    image: LasagnesImg,
    ingredients: [
      "12 feuilles de lasagnes",
      "400 g de viande hachée (boeuf)",
      "1 oignon",
      "2 gousses d'ail",
      "1 boîte de tomates pelées (400 g)",
      "50 cl de béchamel",
      "100 g de fromage râpé (gruyère ou parmesan)",
      "2 cuillères à soupe d'huile d'olive",
      "sel",
      "poivre",
      "herbes de Provence"
    ],
    ustensiles: [
      "1 poêle",
      "1 plat à gratin",
      "1 casserole",
      "1 couteau",
      "1 planche à découper",
      "1 cuillère en bois"
    ],
    etapes: [
      "Émincer l'oignon et l'ail. Les faire revenir dans une poêle avec l'huile d'olive jusqu'à ce qu'ils soient translucides.",
      "Ajouter la viande hachée, saler, poivrer, et cuire jusqu'à ce qu'elle soit bien dorée.",
      "Incorporer les tomates pelées et les herbes de Provence. Laisser mijoter à feu doux pendant 15 minutes.",
      <div className="flex pt-4 pb-4">
        <Chrono MinutesCustom={15} />
      </div>,
      "Préchauffer le four à 180°C (thermostat 6).",
      "Dans un plat à gratin, étaler une fine couche de béchamel, puis disposer des feuilles de lasagnes.",
      "Ajouter une couche de sauce bolognaise, puis une couche de béchamel. Répéter l'opération en terminant par une couche de béchamel.",
      "Saupoudrer le dessus avec le fromage râpé.",
      "Enfourner pendant 30 minutes jusqu'à ce que le dessus soit doré et gratiné.",
      <div className="flex pt-4 pb-4">
        <Chrono MinutesCustom={30} />
      </div>,
      "Laisser reposer quelques minutes avant de servir."
    ]
  },
    {
    nom: "Curry aux légumes",
    duree: 40,
    personnes: 4,
    image: CurryLegumesImg,
    ingredients: [
      "2 carottes",
      "1 courgette",
      "1 poivron rouge",
      "1 oignon",
      "2 gousses d'ail",
      "400 ml de lait de coco",
      "2 cuillères à soupe de pâte de curry",
      "1 cuillère à soupe d'huile d'olive",
      "sel",
      "poivre",
      "riz basmati"
    ],
    ustensiles: [
      "1 grande poêle ou wok",
      "1 couteau",
      "1 planche à découper",
      "1 cuillère en bois",
      "1 casserole"
    ],
    etapes: [
       "Éplucher et couper les légumes en dés.",
      "Faire revenir l'oignon et l'ail hachés dans l'huile d'olive jusqu'à ce qu'ils soient translucides.",
      "Ajouter les légumes et faire sauter 5 minutes.",
      <div className="flex pt-4 pb-4" key="chrono-curry">
        <Chrono MinutesCustom={5} />
      </div>,
      "Incorporer la pâte de curry, bien mélanger.",
      "Verser le lait de coco, saler, poivrer, et laisser mijoter 25 minutes.",
      <div className="flex pt-4 pb-4" key="chrono-curry">
        <Chrono MinutesCustom={25} />
      </div>,
      "Faire cuire le riz basmati selon les indications du paquet.",
      "Servir le curry avec le riz."
    ]
  },

  {
    nom: "Gratin dauphinois",
    duree: 60,
    personnes: 4,
    image: GratinAuphinoisImg,
    ingredients: [
      "1 kg de pommes de terre",
      "50 cl de crème fraîche épaisse",
      "2 gousses d'ail",
      "50 g de beurre",
      "sel",
      "poivre",
      "noix de muscade"
    ],
    ustensiles: [
      "1 plat à gratin",
      "1 casserole",
      "1 couteau",
      "1 planche à découper",
      "1 saladier"
    ],
    etapes: [
      "Préchauffer le four à 160°C (thermostat 5-6).",
      "Éplucher et couper les pommes de terre en fines rondelles.",
      "Frotter le plat à gratin avec une gousse d'ail coupée en deux puis beurrer le plat.",
      "Disposer les rondelles de pommes de terre en couches serrées.",
      "Dans un saladier, mélanger la crème, sel, poivre et noix de muscade râpée.",
      "Verser la crème sur les pommes de terre.",
      "Parsemer le dessus de petits morceaux de beurre.",
      <div className="flex pt-4 pb-4" key="chrono-gratin">
        <Chrono MinutesCustom={60} />
      </div>,
      "Cuire au four pendant 1 heure jusqu'à ce que le dessus soit doré et les pommes de terre fondantes."
    ]
  },

  {
    nom: "Omelette",
    duree: 10,
    personnes: 2,
    image: OmelletteImg,
    ingredients: [
      "4 œufs",
      "2 cuillères à soupe de lait",
      "sel",
      "poivre",
      "beurre",
      "herbes fraîches (persil, ciboulette)"
    ],
    ustensiles: [
      "1 poêle",
      "1 bol",
      "1 fouet ou fourchette",
      "1 spatule"
    ],
    etapes: [
      "Battre les œufs avec le lait, le sel et le poivre dans un bol.",
      "Faire fondre le beurre dans la poêle à feu moyen.",
      "Verser les œufs battus dans la poêle.",
      "Cuire sans remuer jusqu'à ce que le dessous soit pris.",
      <div className="flex pt-4 pb-4" key="chrono-omelette">
        <Chrono MinutesCustom={5} />
      </div>,
      "Ajouter les herbes fraîches ciselées.",
      "Plier l’omelette en deux et servir."
    ]
  },

  {
    nom: "Pizza Margherita",
    duree: 90,
    personnes: 4,
    image: PizzaImg,
    ingredients: [
      "1 pâte à pizza",
      "200 g de sauce tomate",
      "200 g de mozzarella",
      "quelques feuilles de basilic frais",
      "2 cuillères à soupe d'huile d'olive",
      "sel"
    ],
    ustensiles: [
      "1 plaque de cuisson",
      "1 rouleau à pâtisserie",
      "1 couteau"
    ],
    etapes: [
      "Préchauffer le four à 220°C (thermostat 7-8).",
      "Étaler la pâte à pizza sur la plaque de cuisson.",
      "Étaler la sauce tomate uniformément sur la pâte.",
      "Couper la mozzarella en tranches et les disposer sur la sauce.",
      "Ajouter un peu de sel et arroser d’huile d'olive.",
      "Cuire au four pendant 15-20 minutes jusqu'à ce que la pâte soit dorée.",
      <div className="flex pt-4 pb-4" key="chrono-pizza">
        <Chrono MinutesCustom={20} />
      </div>,
      "Sortir la pizza et ajouter les feuilles de basilic frais avant de servir."
    ]
  },

  {
    nom: "Poulet rôti",
    duree: 90,
    personnes: 4,
    image: PouletRotiImg,
    ingredients: [
      "1 poulet entier (environ 1.5 kg)",
      "3 cuillères à soupe d'huile d'olive",
      "2 gousses d'ail",
      "herbes de Provence",
      "sel",
      "poivre",
      "1 citron"
    ],
    ustensiles: [
      "1 plat à four",
      "1 pinceau de cuisine",
      "1 couteau"
    ],
    etapes: [
      "Préchauffer le four à 200°C (thermostat 6-7).",
      "Badigeonner le poulet d'huile d'olive avec un pinceau.",
      "Frotter le poulet avec l'ail haché, les herbes de Provence, sel et poivre.",
      "Couper le citron en deux et le placer dans la cavité du poulet.",
      "Mettre le poulet dans le plat et enfourner pendant 1h30, en l'arrosant régulièrement avec le jus de cuisson.",
      <div className="flex pt-4 pb-4" key="chrono-poulet">
        <Chrono MinutesCustom={90} />
      </div>,
      "Vérifier la cuisson en piquant la cuisse, le jus doit être clair.",
      "Laisser reposer 10 minutes avant de découper et servir."
    ]
  },

  {
    nom: "Quiche lorraine",
    duree: 50,
    personnes: 4,
    image: QuicheLoraineImg,
    ingredients: [
      "1 pâte brisée",
      "200 g de lardons fumés",
      "3 œufs",
      "20 cl de crème fraîche",
      "20 cl de lait",
      "100 g de gruyère râpé",
      "sel",
      "poivre",
      "noix de muscade"
    ],
    ustensiles: [
      "1 moule à tarte",
      "1 poêle",
      "1 saladier",
      "1 fouet"
    ],
    etapes: [
      "Préchauffer le four à 180°C (thermostat 6).",
      "Faire revenir les lardons dans une poêle jusqu'à ce qu'ils soient dorés.",
      "Étaler la pâte brisée dans le moule à tarte.",
      "Dans un saladier, battre les œufs avec la crème, le lait, sel, poivre et une pincée de noix de muscade.",
      "Ajouter les lardons et le gruyère râpé au mélange.",
      "Verser la préparation sur la pâte.",
      "Cuire au four pendant 35-40 minutes jusqu'à ce que la quiche soit dorée.",
      <div className="flex pt-4 pb-4" key="chrono-quiche">
        <Chrono MinutesCustom={40} />
      </div>,
      "Laisser tiédir avant de servir."
    ]
  },

  {
    nom: "Soupe aux légumes",
    duree: 15,
    personnes: 4,
    image: SoupeImg,
    ingredients: [
      "1 melon bien mûr",
      "20 cl de jus d'orange",
      "1 cuillère à soupe de miel",
      "quelques feuilles de menthe",
      "sel"
    ],
    ustensiles: [
      "1 blender ou mixeur",
      "1 couteau",
      "1 bol"
    ],
    etapes: [
      "Couper le melon en deux, retirer les graines et prélever la chair.",
      "Mettre la chair du melon dans le blender avec le jus d'orange, le miel et une pincée de sel.",
      "Mixer jusqu'à obtenir une texture lisse.",
      <div className="flex pt-4 pb-4" key="chrono-soupe">
        <Chrono MinutesCustom={10} />
      </div>,
      "Réserver au frais pendant au moins 1 heure.",
      "Servir la soupe bien froide, décorée de feuilles de menthe."
    ]
  },

  {
    nom: "Tajine",
    duree: 90,
    personnes: 4,
    image: TajinImg,
    ingredients: [
      "600 g de viande d'agneau ou poulet",
      "2 oignons",
      "2 carottes",
      "1 courgette",
      "100 g de pruneaux",
      "50 g d'amandes",
      "2 cuillères à soupe d'huile d'olive",
      "1 cuillère à café de cannelle",
      "1 cuillère à café de gingembre moulu",
      "sel",
      "poivre",
      "coriandre fraîche"
    ],
    ustensiles: [
      "1 tajine ou cocotte",
      "1 couteau",
      "1 planche à découper",
      "1 cuillère en bois"
    ],
    etapes: [
      "Faire revenir les oignons hachés dans l'huile d'olive dans le tajine.",
      "Ajouter la viande et la faire dorer sur toutes les faces.",
      "Ajouter les épices, sel, poivre, et bien mélanger.",
      "Ajouter les légumes coupés en morceaux, les pruneaux et les amandes.",
      "Couvrir et laisser mijoter à feu doux pendant 1h15.",
      <div className="flex pt-4 pb-4" key="chrono-tajine">
        <Chrono MinutesCustom={75} />
      </div>,
      "Parsemer de coriandre fraîche avant de servir."
    ]
  },
  {
  nom: "Chili con Carne",
  duree: 75,
  personnes: 4,
  image: ChiliConCarneImg,
  ingredients: [
    "400 g de viande hachée (bœuf)",
    "1 oignon",
    "2 gousses d’ail",
    "1 poivron rouge",
    "400 g de tomates concassées",
    "1 boîte de haricots rouges (400 g)",
    "2 cuillères à soupe de concentré de tomate",
    "1 cuillère à café de cumin",
    "1 cuillère à café de paprika",
    "1 pincée de piment (ou plus selon le goût)",
    "Sel",
    "Poivre",
    "Huile d’olive"
  ],
  ustensiles: [
    "1 grande casserole ou cocotte",
    "1 planche à découper",
    "1 couteau",
    "1 cuillère en bois",
    "1 louche"
  ],
  etapes: [
    "Émincer l’oignon, l’ail et le poivron.",
    "Faire revenir l’oignon et l’ail dans de l’huile d’olive pendant 2-3 minutes.",
    "Ajouter le poivron et cuire 5 minutes supplémentaires.",
    <div className="flex pt-4 pb-4" key="chrono-chili">
      <Chrono MinutesCustom={5} />
    </div>,
    "Incorporer la viande hachée et la faire dorer.",
    "Ajouter les tomates concassées, le concentré de tomate et les haricots rouges égouttés.",
    "Assaisonner avec le cumin, le paprika, le piment, le sel et le poivre.",
    "Couvrir et laisser mijoter à feu doux pendant 1 heure en remuant de temps en temps.",
    <div className="flex pt-4 pb-4" key="chrono-chili">
      <Chrono MinutesCustom={60} />
    </div>,
    "Servir chaud, idéalement avec du riz ou du pain."
  ]
  }
];

  const { recetteId } = useParams();

  const recette = recettesList.find(r =>
    r.nom?.toLowerCase().includes(recetteId.toLowerCase())
  );

  if (!recette) return <p>Recette non trouvée</p>;

  return (
    <>
      <Recette recette={recette}/>
    </>
  );
}

export default RecettesList;