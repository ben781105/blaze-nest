import { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
function StudentDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: 1, name: "Lodges/Property", image: "/images/agent1.png" },
    { id: 2, name: "Phones&Gadgets", image: "/images/agent1.png" },
    { id: 3, name: "Furniture", image: "/images/agent1.png" },
    { id: 4, name: "Clothes", image: "/images/agent1.png" },
    { id: 5, name: "Cosmetics", image: "/images/agent1.png" },
    { id: 6, name: "Cars&Automobile", image: "/images/agent1.png" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Search */}
      <header className=" ">
        <div className="bg-amber-600 mt-15 px-4 py-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="I am looking for......."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 rounded bg-white outline-none border-0 shadow-sm"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="text-gray-400" size={24} />
            </div>
          </div>
        </div>
      </header>

      {/* Categories Section */}
      <main className="flex-grow bg-white p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/${category.name.toLowerCase()}`}
              className="block"
            >
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-md transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 text-center font-medium">
                  {category.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
