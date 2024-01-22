import { Link as NavLink } from "react-router-dom";
import logo from "../../../src/assets/Logo.png";
import logoText from "../../../src/assets/Logo_Text.png";
import ResNav from "./ResNav";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full shadow-sm bg-white ${scrolling ? "shadow-lg bg-white" : ""}`}>
      <div className="flex justify-between items-center py-5 px-2 container mx-auto">
        <div className="flex gap-2">
          <img src={logo} alt="" className="w-16" />
          <img src={logoText} alt="" className="w-20" />
        </div>
        <nav className="hidden md:flex">
          <ul className="flex gap-10 uppercase font-semibold">
            <li className="flex items-center">
              <NavLink to={"about"}>HOME</NavLink>
            </li>

            <li className="flex items-center">
              <NavLink to={"contact"}>About</NavLink>
            </li>

            <li className="flex items-center">
              <NavLink to={"about"}>ALl House</NavLink>
            </li>

            <li className="flex items-center">
              <NavLink to={"about"}>Contact</NavLink>
            </li>
            <li className="flex items-center">
              <NavLink to={"dashboard"}>Dashboard</NavLink>
            </li>
          </ul>
        </nav>
        <ResNav />
        <div className="hidden md:flex">
          <NavLink
            to="register"
            className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Button Text</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
