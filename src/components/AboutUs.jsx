function AboutUs() {
  return (
    <section className="flex justify-between items-start px-10 py-16 space-y-5 bg-[#EFE4D7] mt-20">
      <div className="max-w-xl space-y-2">
        <h2 className="bg-gradient-black-blue text-3xl font-bold">About Us</h2>
        <p className="text-lg">
          At <strong>BLAZE NEST</strong>, we believe that finding the perfect
          lodge should be an exciting and rewarding journey, Our dedicated team
          is passionate about making it easier for student to find a lodge
          without stress a, we pride ourselves on our utmost commitment and
          integrity, Also we have added real important features like the{" "}
          <strong>'Marketplace'</strong>where student can easily buy and sell
          products while having direct contact with the vendor making it easy
          and also trustworthy, We at <strong>Blaze Nest</strong> hope to meet
          the demand of customers and we will thrive to always satisfy our
          customers, ensuring a seamless experience tailored to your unique
          needs.
        </p>
      </div>
      <img
        src="/imgs/about-us-img.webp"
        alt="About Us Image"
        className="w-[680px] h-[474px] aspect-square object-center"
      />
    </section>
  );
}

export default AboutUs;
