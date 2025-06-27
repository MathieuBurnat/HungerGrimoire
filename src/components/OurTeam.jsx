import EpPp from "../img/ep_pp.jpg"
import AbPp from "../img/ab_pp.png"
import AmPp from "../img/am_pp.png"
import MbPp from "../img/mb_pp.png"
import TeamCards from "./TeamCards";

function OurTeam () {
    return (
    <>
        <div className="flex flex-col">
            <p className="tracking-wide ml-2 mx-96 p-2 w-40 my-8 uppercase bg-lighter-grey">
                Et voici et voilà...
            </p>
            <div className="flex flex-row gap-5 px-20">
                <div class="text-black vertical-rl bg-medium-grey p-3">
                    <h1 class="text-2xl text-left uppercase">L'équipe</h1>
                </div>
                <TeamCards 
                name="Mathieu Burnat"
                title="formateur et dev"
                quote='"I could convert caffeine into code"'
                img={MbPp}
                githubLink="https://github.com/MathieuBurnat/"
                hoverColor="hover:bg-dark-green"
                ringColor="ring-dark-green"
                />
                <TeamCards 
                name="Anduan Berisha"
                title="dev dual 1e année CFC"
                quote='"Touche pas à mes données"'
                img={AbPp}
                githubLink="https://github.com/AnduanBerisha/"
                hoverColor="hover:bg-yellow"
                ringColor="ring-yellow"
                />
                <TeamCards 
                name="Aleksa Mihajlovic"
                title="dev dual 1e année CFC"
                quote='"ahahah"'
                img={AmPp}
                githubLink="https://github.com/Lexas220/"
                hoverColor="hover:bg-light-green"
                ringColor="ring-light-green"
                />
                <TeamCards 
                name="Elia Portela"
                title="dev dual 1e année CFC"
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