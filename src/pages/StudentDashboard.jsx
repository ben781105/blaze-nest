import { useState} from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { SavedIcon } from "../components/icons";
function StudentDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = [
    { id: 1, name: "Lodges&Property", image: "/imgs/cozy-lodge.png" },
    { id: 2, name: "Phones&Gadgets", image: "/imgs/laptop.png" },
    { id: 3, name: "Furniture", image: "/imgs/furniture6.jpg" },
    { id: 4, name: "Clothes&Accessories", image: "/imgs/clothes1.jpg" },
    { id: 5, name: "Cosmetics", image: "/imgs/cosmetics2.jpg" },
    { id: 6, name: "Cars&Automobile", image: "/imgs/car3.jpg" },
  ];
  const recentlyviewedDamyData = [
    { id: 1, title: "Cozy Lodge", image: "/imgs/cozy-lodge.png", price: "N 5,000", vendorImage: "/imgs/yurt.png" },
    { id: 2, title: "Modern Apartment", image: "/imgs/furniture6.jpg", price: "N 10,000", vendorImage: "/imgs/sarah.png" },
    { id: 3, title: "Stylish Phone", image: "/imgs/laptop.png", price: "N 30,000", vendorImage: "/imgs/sam.png" },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
     
      <header className=" flex bg-amber-600 px-4 py-8">
        <div className="relative w-full">
              <input
                type="text"
                placeholder="I am looking for......."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 rounded bg-white outline-none border-0 shadow-sm"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="text-gray-400" size={24} />
              </div>
         </div>
      </header>

      {/* Categories Section */}
      <main className="flex-grow bg-white p-6">
        <h1 className="text-2xl md:text-4xl font-semibold">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/student-dashboard/${category.name.toLowerCase()}`}
              className="block"
            >
              <div className="overflow-hidden h-70 shadow-lg hover:shadow-md transition-shadow">
                <div className="h-55 overflow-hidden">
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

         {/*recently viewed section*/}
      <section className="mt-4 flex p-4 flex-col">
        <h1 className="text-2xl md:text-3xl">Viewed Recently</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-6">
          {recentlyviewedDamyData.map((listing)=>
          <div
              key={listing.id}
              className="bg-white border border-gray-300 relative shadow-md hover:shadow-lg transition"
            >
              <div className="h-50 w-full">
                <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover  mb-2"
              />
              </div>
              <h2 className="mt-4 ml-4 mr-4 text-sm">{listing.title}</h2>
              <p className=" ml-4 mr-4">{listing.price}</p>
              <div className="flex w-full p-4 items-center gap-3">
                <button className="mt-2 w-full cursor-pointer bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Message Vendor
                </button>
                
                  <img
                  className="object-cover w-13 h-13 rounded-full"
                  src={listing.vendorImage} 
                  alt="vendor" />
                
              </div>
              <span className="absolute top-54 right-5 border p-2 rounded-full">
                 <SavedIcon className="h-7 w-7"/>
              </span>
            </div>
          )}
        </div>
      </section>   
    </div>
  );
}

export default StudentDashboard;
