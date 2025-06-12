import Tabs from "./Tabs"; // or use DashboardNav if that's your component
import { Outlet } from "react-router-dom";
import {
  HomeIcon,
  SavedIcon,
  MessageIcon,
  ProfileIcon,
  AddIconCircled,
} from "./icons/index";
import BottomMenu from "./BottomMenu";

const bottomMenuData = [
  {
    path: "/agent/dashboard",
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    path: "/agent/manage-listing",
    icon: <SavedIcon className="h-6 w-6" />,
  },
  {
    path: "/agent/add-lodge",
    icon: <AddIconCircled className="h-6 w-6" />,
  },
  {
    path: "/agent/messages",
    icon: <MessageIcon className="h-6 w-6" />,
  },
  {
    path: "/agent/profile",
    icon: <ProfileIcon className="h-6 w-6" />,
  },
];

const DashboardLayout = () => {
  return (
    <>
      <Tabs />
      <div className="p-4 md:mb-16">
        <Outlet />
      </div>
      <BottomMenu menuData={bottomMenuData} />
    </>
  );
};

export default DashboardLayout;
