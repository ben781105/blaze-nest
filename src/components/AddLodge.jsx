import React, { useState } from "react";
import BottomMenu from "./BottomMenu";

const AddLodge = () => {
  const [lodgeData, setLodgeData] = useState({
    lodgeName: "",
    location: "",
    pricePerYear: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLodgeData({ ...lodgeData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLodgeData({ ...lodgeData, image: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(lodgeData); // Replace with API call
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-lg mx-auto pt-6 pb-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Add photo</h2>
      <p className="text-sm text-gray-600 mb-4">
        First picture - is the title picture
      </p>

      <div className="flex flex-col items-start mb-4">
        <label className="flex items-center justify-center bg-orange-200 text-5xl text-gray-700 w-24 h-24 rounded-md cursor-pointer mb-2">
          +
          <input
            type="file"
            accept=".jpg,.png"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
        <p className="text-xs text-gray-500">
          Supported format are *.jpg and *.png
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="lodgeName"
          placeholder="Lodge Name"
          value={lodgeData.lodgeName}
          onChange={handleChange}
          className="border rounded px-4 py-2 w-full"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={lodgeData.location}
          onChange={handleChange}
          className="border rounded px-4 py-2 w-full"
          required
        />
        <input
          type="number"
          name="pricePerYear"
          placeholder="Price per year"
          value={lodgeData.pricePerYear}
          onChange={handleChange}
          className="border rounded px-4 py-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AddLodge;
