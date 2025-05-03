import { CircleDot } from "lucide-react";
import { TwitterX, Facebook, Instagram } from "./icons/index";

function Footer() {
  return (
    <footer className="bg-[#6C3C04] text-white px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col justify-center items-center space-y-5">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <img src="/svgs/blaze-nest-logo.svg" alt="Blaze Nest" />
            </div>
            <span className="text-xl font-bold bg-gradient-black-blue">
              Blaze Nest
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CircleDot className="w-4 h-4" />
              <span>Trustworthy</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleDot className="w-4 h-4" />
              <span>Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleDot className="w-4 h-4" />
              <span>Next Level</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold mb-3">Catch us on</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber-200 transition-colors">
              <TwitterX className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="hover:text-amber-200 transition-colors">
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="hover:text-amber-200 transition-colors">
              <Instagram className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-amber-700 text-center">
        <p>&copy; {new Date().getFullYear()} Blaze Nest, All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
