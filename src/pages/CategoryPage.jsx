import React from "react";
import { useParams } from "react-router-dom";
import SavedIcon from "../components/icons/SavedIcon";
import { Search } from "lucide-react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

const listings = [
  {
    id: 1,
    category: "phones&gadgets",
    title: "Dell Laptop for sale",
    price: "₦110,000.00",
    image: "/imgs/laptop.png",
    vendorImage:"/imgs/teni.png"
  },
  {
    id: 2,
    category: "furniture",
    title: "Bed Stand and front table",
    price: "₦225,000.00",
    image: "/imgs/cozy-lodge.png",
    vendorImage:"/imgs/sarah.png"
  },
  {
    id: 3,
    category: "furniture",
    title: "Nice Gaming/Working Chair",
    price: "₦120,000.00",
    image: "/imgs/furniture4.jpg",
    vendorImage:"/imgs/sam.png"
  },
  {
    id: 4,
    category: "furniture",
    title: "Couch 3 sitters",
    price: "₦100,000.00",
    image: "/imgs/furniture2.jpg",
    vendorImage:"/imgs/sarah.png"
  },
  {
    id: 5,
    category: "furniture",
    title: "Neat Tble&chair",
    price: "₦240,000.00",
    image: "/imgs/furniture3.jpg",
    vendorImage:"/imgs/teni.png"
  },
  {
    id: 6,
    category: "furniture",
    title: "Nice Dining Table",
    price: "₦150,000.00",
    image: "/imgs/furniture1.jpg",
    vendorImage:"/imgs/petri.png"
  },
  {
    id: 7,
    category: "furniture",
    title: "Multi-purpose Wardrope",
    price: "₦120,000.00",
    image: "/imgs/furniture2.jpg",
    vendorImage:"/imgs/jeny.png"
  },
  {
    id: 8,
    category: "furniture",
    title: "6 by 6 Bed",
    price: "₦120,000.00",
    image: "/imgs/furniture7.jpg",
    vendorImage:"/imgs/adam.png"
  },
  {
    id: 9,
    category: "furniture",
    title: "Nice Wardrope",
    price: "₦220,000.00",
    image: "/imgs/furniture7.jpg",
    vendorImage:"/imgs/jeny.png"
  },
  {
    id: 10,
    category: "phones&gadgets",
    title: "gadgetfor sale",
    price: "₦90,000.00",
    image: "/imgs/gadgets.png",
    vendorImage:"/imgs/sam.png",
  },
  {
    id: 11,
    category: "phones&gadgets",
    title: "dell latitude 7350",
    price: "₦290,000.00",
    image: "/imgs/dell latitude 7350.jpg",
    vendorImage:"/imgs/yurt.png"
  },
  {
    id: 12,
    category: "phones&gadgets",
    title: "samsung phone",
    price: "₦290,000.00",
    image: "/imgs/samsung 12.2.jpg",
    vendorImage:"/imgs/sam.png"
  },
  {
    id: 13,
    category: "cosmetics",
    title: "beauty eye lash",
    price: "₦290,000.00",
    image: "/imgs/cosmetics1.jpg",
    vendorImage:"/imgs/sarah.png"
  },
  {
    id: 14,
    category: "cosmetics",
    title: "duodrant",
    price: "₦80,000.00",
    image: "/imgs/cosmetics2.jpg",
    vendorImage:"/imgs/sam.png"
  },
  {
    id: 15,
    category: "clothes&Accessories",
    title: "white shirt and pants",
    price: "₦290,000.00",
    image: "/imgs/clothes1.jpg",
    vendorImage:"/imgs/petri.png"
  },
  {
    id: 16,
    category: "clothes&Accessories",
    title: "brown hoodie",
    price: "₦290,000.00",
    image: "/imgs/clothes2.jpg",
    vendorImage:"/imgs/teni.png"
  },
  {
    id: 17,
    category: "clothes&Accessories",
    title: "casual wear",
    price: "₦290,000.00",
    image: "/imgs/clothes3.jpg",
    vendorImage:"/imgs/jeny.png"
  },
  {
    id: 18,
    category: "clothes&Accessories",
    title: "travel clothes",
    price: "₦290,000.00",
    image: "/imgs/clothes4.jpg",
    vendorImage:"/imgs/yurt.png"
  },
  {
    id: 19,
    category: "Cars&Automobile",
    title: "lamborgini",
    price: "₦1,290,000.00",
    image: "/imgs/car1.jpg",
    vendorImage:"/imgs/sam.png"
  },
  {
      id: 21,
    category: "Cars&Automobile",
    title: "Audi sport",
    price: "₦1,290,000.00",
    image: "/imgs/car2.jpg",
    vendorImage:"/imgs/yurt.png"
  },
  {
    id: 22,
    category: "Cars&Automobile",
    title: "Mc Claren",
    price: "₦3,290,000.00",
    image: "/imgs/car3.jpg",
    vendorImage:"/imgs/sarah.png"
  },
  {
    id: 23,
    category: "Cars&Automobile",
    title: "Nissan",
    price: "₦2,290,000.00",
    image: "/imgs/car4.jpg",
    vendorImage:"/imgs/adam.png"
  },
];

export default function CategoryPage() {
  const { category } = useParams();
   const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredListings = listings.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
  const formattedCategory = category
    .replace(/&/g, " & ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  
    
  return (
    <section>
      <header className=" flex bg-amber-600 px-4 py-8">
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
    <div className="p-4 md:p-8 relative">
      
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
        {formattedCategory}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 overflow-x-hidden md:grid-cols-3 gap-6">
        {filteredListings.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No listings found in this category.
          </p>
        ) : (
          filteredListings.map((listing) => (
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
          ))
        )}
      </div>
    </div>
    </section>
  );
}
