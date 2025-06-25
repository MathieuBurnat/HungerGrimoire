import {
  FiGithub
} from "react-icons/fi";

import { IoLogoGithub } from "react-icons/io";

function TeamCards ( {name, title, quote, img, githubLink, hoverColor, ringColor} ) {
    console.log({hoverColor})
    return (
        <>
            <div className={`flex flex-col items-center p-8 transition duration-500 transform cursor-pointer group ${hoverColor} hover:scale-105 rounded-xl`}>
                <img className={`object-cover w-32 h-32 rounded-full ring-4 ${ringColor}`} src={img} alt="" />

                <h1 className="mt-4 text-2xl font-semibold capitalize dark:text-white group-hover:text-white">{name}</h1>

                <h2 className="mt-2 capitalize">{title}</h2>

                <p className="text-sm italic">{quote}</p>

                <div className="flex mt-3 -mx-2">
                    <a href={githubLink} className="hover:text-white" aria-label="Github">
                        <IoLogoGithub 
                            className="size-10"
                        />
                    </a>
                </div>
            </div>
            
        </>
    );
}

export default TeamCards;