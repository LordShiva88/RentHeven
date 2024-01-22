import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import logo from "../../../src/assets/Logo.png";
import logoText from "../../../src/assets/Logo_Text.png";
import { Link } from "react-router-dom";

const ResNav = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <button className="md:hidden flex" onClick={toggleSidebar}>
        <FaBars className="text-3xl" />
      </button>

      {open && (
        <div className="fixed inset-0 w-full opacity-25 lg:hidden"></div>
      )}
      <div
        className={`absolute inset-0 z-10 h-screen p-3 text-gray-700 duration-500 transform shadow-md  bg-blue-50 w-80 lg:hidden lg:transform-none lg:relative ${
          open ? "" : "hidden"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-between px-5 py-2">
            <div className="flex gap-2">
              <img src={logo} alt="" className="w-16" />
              <img src={logoText} alt="" className="w-20" />
            </div>
            <button
              onClick={toggleSidebar}
              className="hover:text-blue-300 lg:hidden dark:text-gray-400 "
            >
              <IoMdClose className="text-3xl border rounded-full" />
            </button>
          </div>
          <ul className="uppercase font-semibold space-y-8 px-10 mt-10">
            <li className="flex items-center">
              <Link to={"about"}>HOME</Link>
            </li>

            <li className="flex items-center">
              <Link to={"contact"}>About</Link>
            </li>

            <li className="flex items-center">
              <Link to={"about"}>ALl House</Link>
            </li>

            <li className="flex items-center">
              <Link to={"about"}>Contact</Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default ResNav;
