import {
  FiHome,
  FiHash,
  FiGithub
} from "react-icons/fi";
import { LuSwatchBook } from "react-icons/lu";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import DropDownNavBtn from "./DropDownNavBtn";
import OurTeam from '../components/OurTeam';

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <motion.div animate={open ? "open" : "closed"}>
        <button onClick={() => setOpen((prev) => !prev)}>
          <DropDownNavBtn isOpen={open} />
        </button>
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-row justify-between px-24 items-start p-2 bg-light-grey shadow-xl absolute top-[100%] left-[50%] w-[100%] overflow-hidden h-dvh z-[999]"
        >
          {/* Colonne de gauche */}
          <div className="flex flex-col gap-5 w-1/3 px-10 py-5">
            <Option setOpen={setOpen} Icon={FiHome} text="Home" to="/" />
            <Option setOpen={setOpen} Icon={FiHash} text="About" to="/About" />
            <Option setOpen={setOpen} Icon={LuSwatchBook} text="Recettes" to="/Recettes" />
            <Option
              setOpen={setOpen}
              Icon={FiGithub}
              text="GitHub"
              to="https://github.com/MathieuBurnat/HungerGrimoire/"
              external
            />
          </div>

          {/* Colonne de droite */}
          <div className="w-2/3 h-full bg-transparent p-4 flex justify-center items-center">
            <OurTeam />
          </div>
        </motion.ul>
      </motion.div>

    </div>
  );
};

const Option = ({ text, Icon, setOpen, to, external = false }) => {
  const content = (
    <>
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </>
  );

  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="w-full"
    >
      {external ? (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-lg flex items-center gap-2 w-1/3 p-2 whitespace-nowrap rounded-md hover:bg-dark-green transition-colors duration-1000 cursor-pointer"
        >
          {content}
        </a>
      ) : (
        <Link
          to={to}
          className="text-lg flex items-center gap-2 w-1/3 p-2 whitespace-nowrap rounded-md hover:bg-light-green transition-colors duration-1000 cursor-pointer"
        >
          {content}
        </Link>
      )}
    </motion.li>
  );
};

export default StaggeredDropDown;

// === Variants ===

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren" },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: { when: "afterChildren" },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
