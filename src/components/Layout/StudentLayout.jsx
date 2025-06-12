import BottomMenu from "../BottomMenu";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  SavedIcon,
  CartIcon,
  MessageIcon,
  ProfileIcon,
} from "../icons/index";

const bottomMenuData = [
  {
    path: "/student-dashboard/home",
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    path: "/student-dashboard/saved",
    icon: <SavedIcon className="h-6 w-6" />,
  },
  { path: "/student-dashboard/cart", icon: <CartIcon className="h-6 w-6" /> },
  {
    path: "/student-dashboard/messages",
    icon: <MessageIcon className="h-6 w-6" />,
  },
  {
    path: "/student-dashboard/profile",
    icon: <ProfileIcon className="h-6 w-6" />,
  },
];

const StudentLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <nav className="bg-primary fixed flex items-center justify-between max-sm:px-3 md:justify-center xl:justify-between md:space-x-16 xl:px-5 py-2 font-bold inset-x-0 z-50">
        <div>
          <Link to="/" className="flex items-center space-x-1">
            <img src="/svgs/blaze-nest-logo.svg" alt="Blaze Nest Logo" />
            <p className="bg-gradient-black-blue">Blaze Nest</p>
          </Link>
        </div>
      </nav>
      <main className="flex-1 mt-15  mb-20 ">
        <Outlet />
      </main>
      <BottomMenu menuData={bottomMenuData} />
    </div>
  );
};

export default StudentLayout;
