import React from "react";
import Navbar from "../Navbar";
import BottomMenu from "../BottomMenu";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const StudentLayout = () => {
  return (
    <div>
      <nav className="bg-primary fixed flex items-center justify-between max-sm:px-3 md:justify-center xl:justify-between md:space-x-16 xl:px-5 py-2 font-bold inset-x-0 z-50">
        <div>
          <Link to="/" className="flex items-center space-x-1">
            <img src="/svgs/blaze-nest-logo.svg" alt="Blaze Nest Logo" />
            <p className="bg-gradient-black-blue">Blaze Nest</p>
          </Link>
        </div>
      </nav>
      <Outlet />
      <BottomMenu />
    </div>
  );
};

export default StudentLayout;
