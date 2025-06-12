import BottomMenu from './BottomMenu';

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
  <div className="bg-white min-h-screen py-10 pb-24">
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
    {/* Bottom Menu */}
    <BottomMenu />
  </div>
);

export default ManageListing;