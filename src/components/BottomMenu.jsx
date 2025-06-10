import { Link, useLocation } from "react-router-dom";

const BottomMenu = ({ menuData }) => {
  const location = useLocation();

  return (
    <footer className="bg-white fixed bottom-0 w-full h-20 z-50">
      <nav className="flex justify-around p-4">
        <ul className="flex justify-around w-full">
          {menuData.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <li
                key={index}
                className={`flex items-center  ${
                  isActive
                    ? "bg-primary px-3 py-3 text-black"
                    : " px-3 py-3 text-gray-400"
                }  rounded-full`}
              >
                <Link to={item.path} className="flex flex-col items-center">
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
