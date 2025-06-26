import EpPp from "../img/ep_pp.jpg"
import AbPp from "../img/ab_pp.png"
import AmPp from "../img/am_pp.png"
import MbPp from "../img/mb_pp.png"
import TeamCards from "./TeamCards";

function OurTeam () {
    return (
    <>
        <div className="flex flex-row container px-6 py-10 mx-auto">
            <div className="bg-dark-grey rounded-xl grid grid-cols-1 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4 p-2 transition duration-1000 transform cursor-pointer group hover:scale-105">


                <h1 class="bg-light-grey tracking-wide text-2xl uppercase order-1 text-center w-full">L'équipe</h1>

                <TeamCards 
                name="Mathieu Burnat"
                title="formateur et dev"
                quote='"virus.exe click ici"'
                img={MbPp}
                githubLink="https://github.com/MathieuBurnat/"
                hoverColor="hover:bg-dark-green"
                ringColor="ring-dark-green"
                />
                <TeamCards 
                name="Andoufle Berisha"
                title="dev dual 1e année cfc"
                quote='"virus.exe click ici"'
                img={AbPp}
                githubLink="https://github.com/AnduanBerisha/"
                hoverColor="hover:bg-yellow"
                ringColor="ring-yellow"
                />
                <TeamCards 
                name="Alexas M..."
                title="dev dual 1e année cfc"
                quote='"ahah"'
                img={AmPp}
                githubLink="https://github.com/Lexas220/"
                hoverColor="hover:bg-light-green"
                ringColor="ring-light-green"
                />
                <TeamCards 
                name="Elia Portela"
                title="dev dual 1e année cfc"
                quote='"Hello World"'
                img={EpPp}
                githubLink="https://github.com/IlP4rAd0xlI/"
                hoverColor="hover:bg-orange"
                ringColor="ring-orange"
                />
            </div>
</div>
    </>
    );
}

export default OurTeam;