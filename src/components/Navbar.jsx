import { AlignLeft, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Features",
      path: "/features",
    },
    {
      name: "Marketplace",
      path: "/marketplace",
    },
    {
      name: "Lodging",
      path: "/lodging",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Login/Sign Up",
      path: "/auth",
    },
  ];

  return (
    <nav className="bg-primary fixed flex items-center justify-between max-sm:px-3 md:justify-center xl:justify-between md:space-x-16 xl:px-5 py-2 font-bold inset-x-0 z-50">
      <div>
        <Link to="/" className="flex items-center space-x-1">
          <img src="/svgs/blaze-nest-logo.svg" alt="Blaze Nest Logo" />
          <p className="bg-gradient-black-blue">Blaze Nest</p>
        </Link>
      </div>
      <div
        className={`flex justify-center items-center xl:w-[60%] max-sm:fixed max-sm:inset-x-0 max-sm:top-0 max-sm:w-full max-sm:h-[60vh] max-sm:transform max-md:transition-transform max-md:duration-300 max-sm:-z-[5] ${
          isNavOpen
            ? "translate-y-0 opacity-100 max-sm:backdrop-blur-md max-sm:bg-opacity-90"
            : "max-sm:-translate-y-[1000%]"
        }`}
      >
        <ul className="flex justify-evenly items-center *:cursor-pointer space-x-5 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4">
          {navLinks.map((link) => (
            <NavLink
              to={link.path}
              key={link.name}
              className="bg-gradient-black-blue"
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center space-x-5 md:hidden">
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <X size={30} /> : <AlignLeft size={30} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
