function Mission() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-8 px-5 py-16 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2">
        <img
          src="/imgs/mission-img.webp"
          alt="Mission Image"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="bg-gradient-black-blue text-3xl md:text-4xl font-bold uppercase">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to empower students and families in their journey to
          find the perfect lodge. We are dedicated to providing personalized,
          professional service, leveraging our deep skill knowledge and
          commitment into creating a necessary site for students to also help
          students connect with vendors in a vibrant marketplace where quality
          meets convenience. We are committed to fostering a user-friendly
          platform that patronizes trust, transparency, and exceptional customer
          service.
        </p>
      </div>
    </section>
  );
}

export default Mission;
