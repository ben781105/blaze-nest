const features = [
  {
    icon: "/svgs/home-icon.svg",
    title: "Affordable Housing",
    desc: "Browse listings verified for student living.",
  },
  {
    icon: "/svgs/padlock-icon.svg",
    title: "Secure Transactions",
    desc: "Trusted Platform For Secure Payments And Deals.",
  },
  {
    icon: "/svgs/cart-icon.svg",
    title: "Students-Focused Marketplace",
    desc: "Buy or Sell Books, Electronics and More With Peers",
  },
  {
    icon: "/svgs/community-icon.svg",
    title: "Community-Driven",
    desc: "Benefits From Reviews and Recommendation By Fellow Students",
  },
];

function OurFeatures() {
  return (
    <section className="flex flex-col justify-center items-center px-5 py-16 space-y-5 shadow-2xl">
      <h2 className="bg-gradient-black-blue text-3xl font-bold">
        Our Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 max-lg:gap-3 xl:flex xl:justify-center items-stretch space-x-3">
        {features.map((feature, index) => (
          <div
            className="flex flex-col justify-center items-center space-y-4 shadow-2xl bg-white rounded-lg p-4 text-center w-80"
            key={index}
          >
            <img src={feature.icon} alt={`${feature.title}-icon`} />
            <p className="text-xl font-bold">{feature.title}</p>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurFeatures;
