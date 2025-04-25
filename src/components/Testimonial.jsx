const testimonials = [
  {
    name: "Emily R.",
    comment:
      "Finding a place to stay was so easy with Trail Blazers. Highly recommend!",
    university: "University Of XYZ",
    img: "/imgs/emily.png",
  },
  {
    name: "Michael T.",
    comment: "I sold my old textbooks in no time. Great platform for students!",
    university: "University Of ABC",
    img: "/imgs/michael.png",
  },
  {
    name: "Sarah L.",
    comment:
      "The marketplace is fantastic. I found everything I needed for my dorm room.",
    university: "DEF university",
    img: "/imgs/sarah.png",
  },
];

function Testimonial() {
  return (
    <section className="flex flex-col justify-center items-center px-5 py-16 space-y-5">
      <h2 className="bg-gradient-black-blue text-3xl font-bold">
        Testimonials
      </h2>
      <div className="flex justify-center items-stretch space-x-10">
        {testimonials.map((testimony, index) => (
          <div
            className="flex flex-col justify-center items-center space-y-4 shadow-2xl bg-white rounded-lg p-4 text-center w-80"
            key={index}
          >
            <img
              src={testimony.img}
              alt={`${testimony.name}-img`}
              className="aspect-square w-full object-cover rounded-full"
            />
            <p>"{testimony.comment}"</p>
            <p className="font-bold text-xl">{testimony.name}</p>
            <p>{testimony.university}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
