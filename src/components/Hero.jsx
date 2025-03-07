function Hero() {
  return (
    <section className="relative">
      <div className="relative w-full h-full">
        <img
          src="/imgs/banner_img1.png"
          alt="banner img"
          className="w-full object-cover"
        />
        <img
          src="/imgs/banner_img2.png"
          alt="banner img"
          className="w-full object-cover absolute top-0 left-0"
        />
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 w-full">
        <div className="w-full mb-5 space-y-5">
          <div className="relative">
            <div className="bg-white/70 w-full blur-sm p-10"></div>
            <div className="p-5 absolute inset-0">
              <h1 className="text-4xl md:text-4xl font-black bg-gradient-black-blue text-transparent bg-clip-text">
                Affordable Lodging. A Vibrant Marketplace. Tailored for
                Students.
              </h1>
            </div>
          </div>

          <p className="mt-2 text-2xl font-bold">
            Your one-stop platform for finding housing and buying or selling
            with ease.
          </p>
        </div>

        <div className="bg-primary/70 w-full mt-4 py-7">
          <button className="px-10 py-2 bg-white text-[#5DA1EC] rounded-md mx-2">
            Housing
          </button>
          <button className="px-10 py-2 bg-white text-[#5DA1EC] rounded-md mx-2">
            Marketplace
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
