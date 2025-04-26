const marketplace = [
  {
    name: "Textbooks",
    price: "200K",
    img: "/imgs/books.png",
    seller: "Wisdom Sunday",
  },
  {
    name: "Second Hand Laptops",
    price: "200K",
    img: "/imgs/laptop.png",
    seller: "Obinna Tagbuo",
  },
  {
    name: "Hoodies",
    price: "200K",
    img: "/imgs/hoodie.png",
    seller: "Lizzy Gold",
  },
  {
    name: "Electronic Gadgets",
    price: "200K",
    img: "/imgs/gadgets.png",
    seller: "Peter Oseni",
  },
];

function Marketplace() {
  return (
    <section className="flex flex-col justify-center items-center px-5 py-16 space-y-5 bg-[#EFE4D7]">
      <h2 className="bg-gradient-black-blue text-3xl font-bold">Marketplace</h2>

      <div className="flex flex-wrap justify-center items-stretch gap-5 xl:space-x-3">
        {marketplace.map((item, index) => (
          <div
            className="flex flex-col justify-center items-start space-y-4 shadow-2xl bg-white rounded-lg p-4 text-center w-80"
            key={index}
          >
            <img
              src={item.img}
              alt={`${item.name}-img`}
              className="aspect-square w-full object-cover rounded-md"
            />
            <p className="text-xl font-bold">{item.name}</p>
            <p className="text-gray-500">Price: {item.price}</p>
            <p className="text-gray-500">Seller: {item.seller}</p>
            <p className="bg-gradient-black-blue cursor-pointer">
              View Details
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Marketplace;
