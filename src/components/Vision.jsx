function Vision() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-5 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="bg-gradient-black-blue text-3xl md:text-4xl font-bold">
            Vision Statement
          </h2>
          <p className="text-lg leading-relaxed">
            To connect individuals with their dream home through a seamless,
            user friendly platform that inspires trust and fosters community.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/imgs/vision-img.jpg"
            alt="Vision Image"
            className="w-[280px] md:w-[422px] aspect-square object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Vision;
