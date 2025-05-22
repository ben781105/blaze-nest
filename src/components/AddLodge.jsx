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
    console.log(lodgeData); // You can replace this with an API call
  };

  return (
    <div className="px-6 py-8">
      <h2 className="text-lg font-bold mb-4">Add photo</h2>
      <p className="text-sm mb-2">First picture - is the title picture</p>
      <label className="flex justify-center items-center bg-orange-200 text-4xl text-gray-600 w-24 h-24 rounded-md cursor-pointer mb-2">
        +
        <input type="file" accept=".jpg,.png" onChange={handleImageUpload} className="hidden" />
      </label>
      <p className="text-xs text-gray-500 mb-4">Supported formats: *.jpg, *.png</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="lodgeName"
          placeholder="Lodge Name"
          value={lodgeData.lodgeName}
          onChange={handleChange}
          className="border rounded px-4 py-2"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={lodgeData.location}
          onChange={handleChange}
          className="border rounded px-4 py-2"
          required
        />
        <input
          type="number"
          name="pricePerYear"
          placeholder="Price per year"
          value={lodgeData.pricePerYear}
          onChange={handleChange}
          className="border rounded px-4 py-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Post
        </button>
      </form>
    </div>
  );
};

export default AddLodge;
