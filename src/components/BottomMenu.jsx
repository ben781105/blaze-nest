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
    path: "/student-dashboard/home", 
    icon: <HomeIcon className="h-6 w-6" 
    /> 
  },
  { 
    id: 2, 
    path: "/student-dashboard/saved",
    icon: <SavedIcon className="h-6 w-6"
    /> 
  },
  { id: 3,
    path: "/student-dashboard/cart",
    icon: <CartIcon className="h-6 w-6"
    />
  },
  { 
    id: 4,
    path: "/student-dashboard/messages",
    icon: <MessageIcon className="h-6 w-6"
    />
  },
  { id: 5,
    path: "/student-dashboard/profile",
    icon: <ProfileIcon className="h-6 w-6"
    /> 
  },
];

const BottomMenu = () => {
  const location = useLocation();

  return (
    <footer className="bg-white fixed bottom-0 w-full h-20 z-50">
      <nav className="flex justify-around p-4">
        <ul className="flex justify-around w-full">
          {data.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li
                key={item.id}
                className={`flex items-center  ${
                  isActive ? "bg-primary px-3 py-3 text-black" : " px-3 py-3 text-gray-400"
                }  rounded-full`}
              >
                <Link
                  to={item.path}
                  className="flex flex-col items-center"
                >
                  {item.icon}
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
