import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function AuthOptions() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen bg-primary">
      <Navbar />
      <div className="relative w-full h-screen xl:h-full">
        <img
          src="/imgs/hand-holding-keys.png"
          alt="hands holding keys"
          className="w-full h-full object-cover"
        />
        <img
          src="/imgs/group-smiling.png"
          alt="group smiling"
          className="w-full h-full object-cover hidden xl:block"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 w-full">
        <div className="space-y-10 flex flex-col items-center justify-center">
          <h1 className="bg-gradient-black-blue text-transparent bg-clip-text text-2xl md:text-4xl font-bold">
            Sign Up / Login As
          </h1>
          <div className="*:text-primary-blue *:bg-white flex justify-center items-center space-x-10 mt-4">
            <button
              className="font-bold py-4 px-5 md:px-10 rounded-2xl border border-primary-blue"
              onClick={() => navigate("/auth/sign-up/agent")}
            >
              House Agent
            </button>
            <button
              className="font-bold py-4 px-12 rounded-2xl border border-primary-blue"
              onClick={() => navigate("/auth/sign-up/student")}
            >
              Student
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthOptions;
