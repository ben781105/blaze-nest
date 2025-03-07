import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-primary flex justify-between items-center px-5 py-2 font-bold">
      <div>
        <Link to="/" className="flex items-center space-x-1">
          <img src="/svgs/blaze_nest_logo.svg" alt="Blaze Nest Logo" />
          <p className="bg-gradient-black-blue text-transparent bg-clip-text">
            Blaze Nest
          </p>
        </Link>
      </div>
      <div className="w-1/2">
        <ul className="flex justify-evenly items-center *:cursor-pointer *:bg-gradient-black-blue *:text-transparent *:bg-clip-text">
          <li>Home</li>
          <li>About Us</li>
          <li>Features</li>
          <li>Marketplace</li>
          <li>Lodging</li>
          <li>Contact Us</li>
          <li>Login/Sign Up</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
