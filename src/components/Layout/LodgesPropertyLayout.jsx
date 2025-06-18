import { NavLink, Outlet,useNavigate} from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";

function LodgesPropertyLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const subcategories = [
    { label: "Lodges", path: "lodges" },
    { label: "Land/Property", path: "land-property" },
    { label: "Commercial Property", path: "commercial" },
  ];

  return (
    <section>
      <header className="flex bg-amber-600 px-4 py-8">
        <div className="relative w-full">
          <img 
          className="absolute left-2 top-1/2 cursor-pointer transform -translate-y-1/2"
          onClick={() => navigate(-1)}
          src="/svgs/left-arrow-icon.svg" alt="" width={22} 
          />
          <input
            type="text"
            placeholder="Find Category......."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-12 rounded bg-white outline-none border-0 shadow-sm"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search className="text-gray-400" size={24} />
          </div>
        </div>
      </header>

      <div className="p-4">
        <div className="flex flex-wrap gap-4 md:gap-50 justify-center">
          {subcategories.map((sub) => (
            <NavLink
              key={sub.path}
              to={sub.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded text-sm md:text-base font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-black"
                }`
              }
            >
              {sub.label}
            </NavLink>
          ))}
        </div>

        {/* Subcategory Listings */}
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default LodgesPropertyLayout;
