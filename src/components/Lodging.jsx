const lodges = [
  {
    name: "Cozy Lodge",
    img: "imgs/cozy-lodge.png",
    location: "Down School",
    price: "300K/year",
  },
  {
    name: "KC Lodge",
    img: "imgs/kc-lodge.png",
    location: "Yahoo Junction",
    price: "300K/year",
  },
  {
    name: "Jacey Lodge",
    img: "imgs/jacey-lodge.png",
    location: "Inside School",
    price: "300K/year",
  },
];

function Lodging() {
  return (
    <section className="flex flex-col justify-center items-center px-5 py-16 space-y-5">
      <h2 className="bg-gradient-black-blue text-3xl font-bold">Lodging</h2>
      <ul className="flex justify-center flex-wrap md:justify-between items-center text-xl max-sm:gap-4 md:text-2xl font-bold md:w-2xl">
        <li className="bg-gradient-black-blue">Location</li>
        <li className="bg-gradient-black-blue">Price Range</li>
        <li className="bg-gradient-black-blue">House Type</li>
        <li className="bg-gradient-black-blue">Availability Date</li>
      </ul>
      <div>
        <div className="flex flex-wrap  justify-center items-stretch gap-5 xl:space-x-3">
          {lodges.map((lodge, index) => (
            <div
              className="flex flex-col justify-center items-start space-y-4 shadow-2xl bg-white rounded-lg p-4 text-center w-80"
              key={index}
            >
              <img
                src={lodge.img}
                alt={`${lodge.name}-img`}
                className="aspect-square w-full object-cover rounded-md"
              />
              <p className="text-xl font-bold">{lodge.name}</p>
              <p className="text-gray-500">Location: {lodge.location}</p>
              <p className="text-gray-500">Price: {lodge.price}</p>
              <p className="bg-gradient-black-blue cursor-pointer">
                View Details
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Lodging;
