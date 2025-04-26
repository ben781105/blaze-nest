import { useNavigate } from "react-router-dom";

function Simplify() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-center items-center px-5 py-16 space-y-5">
      <h2 className="bg-gradient-black-blue text-4xl text-center md:text-5xl font-black">
        Simplify Your Student Life Today
      </h2>
      <p className="text-center">
        Start exploring affordable lodging and a vibrant marketplace built for
        students like you.
      </p>
      <div className="flex justify-center items-center space-x-5">
        <button
          className="border border-primary-blue text-primary-blue py-3 px-5 rounded-lg"
          onClick={() => navigate("/auth")}
        >
          Sign Up Now
        </button>
        <button className="border border-primary-blue text-primary-blue py-3 px-5 rounded-lg">
          Explore Listings
        </button>
      </div>
    </section>
  );
}

export default Simplify;
