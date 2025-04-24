const howItWorks = [
  {
    icon: "/svgs/user-icon.svg",
    title: "Sign Up",
    desc: "Create an account with student ccredentials.",
  },
  {
    icon: "/svgs/search-icon.svg",
    title: "Browse Listings",
    desc: "Search for housing or explore the marketplace.",
  },
  {
    icon: "/svgs/chat-icon.svg",
    title: "Connect & Deal",
    desc: "Directly message landlords or sellers",
  },
  {
    icon: "/svgs/tick-icon.svg",
    title: "Secure Your Spot",
    desc: "Confirm lodging or make purchase with ease.",
  },
];

function HowItWorks() {
  return (
    <section className="flex flex-col justify-center items-center px-5 py-16 space-y-5 bg-[#EFE4D7]">
      <h2 className="bg-gradient-black-blue text-3xl font-bold">
        How It Works
      </h2>
      <div className="flex justify-center items-stretch space-x-3">
        {howItWorks.map((data, index) => (
          <div
            className="flex flex-col justify-center items-center space-y-4 shadow-2xl bg-white rounded-lg p-4 text-center w-80"
            key={index}
          >
            <img src={data.icon} alt={`${data.title}-icon`} />
            <p className="text-xl font-bold">{data.title}</p>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
