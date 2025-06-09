import React, { useState } from 'react';

const AddLodge = () => {
  const [lodgeData, setLodgeData] = useState({
    lodgeName: '',
    location: '',
    pricePerYear: '',
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
    <>
      {/* Add Lodge Form */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-lg mx-auto pt-6 pb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Add photo</h2>
        <p className="text-sm text-gray-600 mb-4">First picture - is the title picture</p>

        <div className="flex flex-col items-start mb-4">
          <label className="flex items-center justify-center bg-orange-200 text-5xl text-gray-700 w-24 h-24 rounded-md cursor-pointer mb-2">
            +
            <input type="file" accept=".jpg,.png" onChange={handleImageUpload} className="hidden" />
          </label>
          <p className="text-xs text-gray-500">Supported format are *.jpg and *.png</p>
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
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
            Post
          </button>
        </form>
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
    </>
  );
};

export default AddLodge;