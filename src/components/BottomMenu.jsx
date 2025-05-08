import { Link } from "react-router-dom";
import { useState } from "react";
import {
  HomeIcon,
  SavedIcon,
  CartIcon,
  MessageIcon,
  ProfileIcon,
} from "./icons/index";

const data = [
  {
    id: 1,
    name: "Home",
    path: "home",
    icon: <HomeIcon className="text-gray-400 h-6 w-6" />,
  },
  {
    id: 2,
    name: "Saved",
    path: "saved",
    icon: <SavedIcon className="text-gray-400 h-6 w-6" />,
  },
  {
    id: 3,
    name: "Cart",
    path: "cart",
    icon: <CartIcon className="text-gray-400 h-6 w-6" />,
  },
  {
    id: 4,
    name: "Messages",
    path: "messages",
    icon: <MessageIcon className="text-gray-400 h-6 w-6" />,
  },
  {
    id: 5,
    name: "Profile",
    path: "profile",
    icon: <ProfileIcon className="text-gray-400 h-6 w-6" />,
  },
];
const BottomMenu = () => {
  const [active, setActive] = useState(1);
  return (
    <footer className="bg-white ">
      <nav className="flex justify-around p-4">
        <ul className="flex justify-around w-full">
          {data.map((item) => (
            <li
              className={`flex flex-col items-center ${
                active === item.id ? "bg-amber-100" : "text-gray-400"
              } p-1 rounded-full`}
              key={item.id}
              onClick={() => setActive(item.id)}
            >
              <Link
                className="flex cursor-pointer flex-col items-center"
                to={item.path}
              >
                {item.icon}
                <span className="text-xs">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default BottomMenu;
