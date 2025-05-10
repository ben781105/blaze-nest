import { Link, useLocation } from "react-router-dom";
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
    path: "/student-dashboard/home", 
    icon: <HomeIcon className="h-6 w-6" 
    /> 
  },
  { 
    id: 2, 
    name: "Saved",
    path: "/student-dashboard/saved",
    icon: <SavedIcon className="h-6 w-6"
    /> 
  },
  { id: 3,
     name: "Cart",
    path: "/student-dashboard/cart",
    icon: <CartIcon className="h-6 w-6"
    />
  },
  { 
    id: 4,
    name: "Messages",
    path: "/student-dashboard/messages",
    icon: <MessageIcon className="h-6 w-6"
    />
  },
  { id: 5,
    name: "Profile",
    path: "/student-dashboard/profile",
    icon: <ProfileIcon className="h-6 w-6"
    /> 
  },
];

const BottomMenu = () => {
  const location = useLocation();

  return (
    <footer className="bg-white sticky bottom-0 w-full border-t z-50">
      <nav className="flex justify-around p-4">
        <ul className="flex justify-around w-full">
          {data.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li
                key={item.id}
                className={`flex flex-col items-center  ${
                  isActive ? "bg-amber-100 px-3 py-2 text-black" : "text-gray-400"
                } p-1 rounded-full`}
              >
                <Link
                  to={item.path}
                  className="flex flex-col items-center"
                >
                  {item.icon}
                  <span className="text-xs">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default BottomMenu;
