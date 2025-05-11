import { useState } from "react";
import { ChevronLeft, Search } from "lucide-react";
import {
  Link,
  //  useParams
} from "react-router-dom";

function CategoryPage() {
  //   const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const listings = [
    {
      id: 1,
      title: "Spacious Self-Contain",
      location: "Located at miracle junction",
      price: { from: "300,000", to: "250,000" },
      image: "/imgs/banner_img1.png",
      agentName: "Obi",
      agentImage: "/imgs/agent1.png",
    },
    {
      id: 2,
      title: "Spacious Self-Contain",
      location: "Located at Next-Level Junction",
      price: { from: "300,000", to: "250,000" },
      image: "/imgs/banner_img1.png",
      agentName: "Alexi",
      agentImage: "/imgs/agent2.png",
    },
    {
      id: 3,
      title: "Spacious 2Bedroom Apartment",
      location: "Located at Next-Level Junction",
      price: { from: "700,000", to: "500,000" },
      image: "/imgs/banner_img1.png",
      agentName: "Alexi",
      agentImage: "/imgs/agent2.png",
    },
    {
      id: 4,
      title: "Spacious Self-Contain",
      location: "Located at miracle junction",
      price: { from: "300,000", to: "250,000" },
      image: "/imgs/banner_img1.png",
      agentName: "Obi",
      agentImage: "/imgs/agent1.png",
    },
    {
      id: 5,
      title: "Spacious Self-Contain",
      location: "Located at miracle junction",
      price: { from: "300,000", to: "250,000" },
      image: "/imgs/banner_img1.png",
      agentName: "Obi",
      agentImage: "/imgs/agent1.png",
    },
    {
      id: 6,
      title: "Spacious Self-Contain",
      location: "Located at miracle junction",
      price: { from: "300,000", to: "250,000" },
      image: "/imgs/banner_img1.png",
      agentName: "Obi",
      agentImage: "/imgs/agent1.png",
    },
  ];

  // Filter options for the Lodges/Property category
  const filterOptions = [
    { id: "lodges", name: "Lodges" },
    { id: "land", name: "Land/Property" },
    { id: "commercial", name: "Commercial Property" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Search Bar */}
      <div className="bg-amber-600 p-4">
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
      </div>

      {/* Filter Options */}
      <div className="flex space-x-8 items-center justify-evenly p-4 overflow-x-auto">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            className={`px-4 py-2 w-auto min-w-[12rem] rounded-md border whitespace-nowrap text-sm ${
              option.id === "lodges" ? "bg-amber-600 " : "bg-white"
            }`}
          >
            {option.name}
          </button>
        ))}
      </div>

      {/* Property Listings */}
      <main className="flex-grow bg-gray-100 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white border rounded-lg overflow-hidden shadow"
            >
              <div className="relative h-48">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 flex justify-between  ">
                <div className="">
                  <h3 className="font-medium">{listing.title}</h3>
                  <p className="text-sm text-gray-600">{listing.location}</p>
                  <p className="text-sm">
                    <span className="line-through">{listing.price.from}</span>{" "}
                    to pay {listing.price.to}
                  </p>
                </div>

                <button className=" p-2 bg-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-3 pb-3 flex justify-between items-center">
                <button className="border shadow-sm text-gray-800 text-sm px-3 py-1 rounded-md">
                  Message Agent {listing.agentName}
                </button>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={listing.agentImage}
                    alt={`Agent ${listing.agentName}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CategoryPage;
