import EpPp from "../img/ep_pp.jpg"
import AbPp from "../img/ab_pp.png"
import AmPp from "../img/am_pp.png"
import MbPp from "../img/mb_pp.png"
import TeamCards from "./TeamCards";

function OurTeam () {
    return (
    <>
        <div className="">
            <div className="gap-10 rounded-xl grid grid-cols-1 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4 p-2 transition duration-1000 transform cursor-pointer group hover:scale-105">
            <div class="bg-orange order-1">
                <div class="text-blue-50 vertical-rl bg-blue-700 p-6">
                    <h1 class="text-2xl text-left">Some text</h1>
                </div>
                <div class="w-64 ml-2 p-4">
                    <p>
                        Lorem ipsum dolor
                    </p>
                </div>
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