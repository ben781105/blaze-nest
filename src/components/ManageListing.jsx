<<<<<<< HEAD
import React from "react";

const lodges = [
  {
    id: 1,
    name: "Jacey Lodge",
    location: "Down school Ifite Awka",
    price: "#350,000",
    availability: "Available",
    img: "/imgs/lodge-placeholder.jpg",
  },
  {
    id: 2,
    name: "Jacey Lodge",
    location: "Down school Ifite Awka",
    price: "#350,000",
    availability: "Sold",
    img: "/imgs/lodge-placeholder.jpg",
  },
  {
    id: 3,
    name: "Jacey Lodge",
    location: "Down school Ifite Awka",
    price: "#350,000",
    availability: "Available",
    img: "/imgs/lodge-placeholder.jpg",
  },
  {
    id: 4,
    name: "Jacey Lodge",
    location: "Down school Ifite Awka",
    price: "#350,000",
    availability: "Sold",
    img: "/imgs/lodge-placeholder.jpg",
  },
  {
    id: 5,
    name: "Jacey Lodge",
    location: "Down school Ifite Awka",
    price: "#350,000",
    availability: "Available",
    img: "/imgs/lodge-placeholder.jpg",
  },
  {
    id: 6,
    name: "Jacey Lodge",
    location: "Down school Ifite Awka",
    price: "#350,000",
    availability: "Sold",
    img: "/imgs/lodge-placeholder.jpg",
  },
];

const ManageListing = () => (
  <div className="bg-white min-h-screen py-10">
    <div className="max-w-3xl mx-auto px-4">
      <div className="grid grid-cols-4 gap-4 font-semibold border-b pb-2 mb-4">
        <div>
          <img
            src="/svgs/blaze-nest-logo.svg"
            alt="Logo"
            className="w-8 h-8 object-contain mx-auto"
          />
        </div>
        <div>Lodge Name</div>
        <div>Location</div>
        <div>Price / Availability</div>
      </div>
      {lodges.map((lodge) => (
        <div
          key={lodge.id}
          className="grid grid-cols-4 gap-4 items-center border-b py-3"
        >
          <img
            src={lodge.img}
            alt={lodge.name}
            className="w-14 h-14 object-cover rounded bg-gray-100"
          />
          <div>{lodge.name}</div>
          <div>{lodge.location}</div>
          <div>
            <div>{lodge.price}</div>
            <div
              className={`text-xs mt-1 ${
                lodge.availability === "Available"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {lodge.availability}
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* Footer Icons */}
    <div className="flex justify-center gap-6 md:gap-[180px] mt-10 pb-6 flex-wrap">
      <div className="group cursor-pointer text-2xl text-gray-600 hover:text-orange-500 transition-all duration-200 rounded-full p-3 hover:bg-orange-100">
        <i className="ri-home-2-line"></i>
      </div>
      <div className="group cursor-pointer text-2xl text-gray-600 hover:text-orange-500 transition-all duration-200 rounded-full p-3 hover:bg-orange-100">
        <i className="ri-bookmark-line"></i>
      </div>
      <div className="group cursor-pointer text-2xl text-gray-600 hover:text-orange-500 transition-all duration-200 rounded-full p-3 hover:bg-orange-100">
        <i className="ri-add-circle-line"></i>
      </div>
      <div className="group cursor-pointer text-2xl text-gray-600 hover:text-orange-500 transition-all duration-200 rounded-full p-3 hover:bg-orange-100">
        <i className="ri-message-2-line"></i>
      </div>
      <div className="group cursor-pointer text-2xl text-gray-600 hover:text-orange-500 transition-all duration-200 rounded-full p-3 hover:bg-orange-100">
        <i className="ri-account-circle-line"></i>
      </div>
    </div>
  </div>
);

export default ManageListing;
=======
const ManageListing = () => {
  return <div>ManageListing</div>;
};

export default ManageListing;
>>>>>>> main
