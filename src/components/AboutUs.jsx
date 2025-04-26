function AboutUs() {
  return (
    <section className="bg-[#EFE4D7] py-16 mt-20">
      <div className="max-w-7xl mx-auto px-5 flex flex-col-reverse md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="bg-gradient-black-blue text-3xl md:text-4xl font-bold">
            About Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong>BLAZE NEST</strong>, we believe that finding the perfect
            lodge should be an exciting and rewarding journey. Our dedicated
            team is passionate about making it easier for students to find a
            lodge without stress. We pride ourselves on our utmost commitment
            and integrity. Also, we have added real important features like the{" "}
            <strong>'Marketplace'</strong> where students can easily buy and
            sell products while having direct contact with the vendor making it
            easy and also trustworthy. We at <strong>Blaze Nest</strong> hope to
            meet the demand of customers and we will thrive to always satisfy
            our customers, ensuring a seamless experience tailored to your
            unique needs.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="/imgs/about-us-img.webp"
            alt="About Us Image"
            className="w-full h-auto max-w-[680px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
