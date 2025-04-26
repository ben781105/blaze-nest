import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { role } = useParams();

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <div className="w-full max-w-xl py-5 md:py-0">
      <form
        className="bg-white/30 backdrop-blur-md p-5 rounded-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <h3 className="bg-gradient-black-blue text-transparent bg-clip-text text-xl xl:text-4xl font-bold">
            Sign Up As
          </h3>
          <button className="bg-white px-4 xl:px-10 py-3 border border-primary-blue text-primary-blue rounded-xl font-bold">
            {role === "student" ? "Student" : "House Agent"}
          </button>
        </div>
        <div className="flex flex-col space-y-5 mt-5">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#D9D9D9] py-10 px-5 rounded-xl text-black placeholder:text-gray-500 w-full"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Email or Phone"
              className="bg-[#D9D9D9] py-10 px-5 rounded-xl text-black placeholder:text-gray-500 w-full"
              {...register("emailOrPhone", {
                required: "Email or Phone is required",
              })}
            />
            {errors.emailOrPhone && (
              <p className="text-red-500 text-sm">
                {errors.emailOrPhone.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="bg-[#D9D9D9] py-10 px-5 rounded-xl text-black placeholder:text-gray-500 w-full"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button className="py-3 px-20 bg-primary rounded-2xl font-semibold">
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center justify-center space-y-3 mt-10">
        <p>
          <span>Already have an account?</span>{" "}
          <Link to={`/auth/login/${role}`} className="cursor-pointer">
            Log In
          </Link>
        </p>
        <p>Or</p>
        <p className="flex items-center space-x-2 cursor-pointer">
          <img
            src="/svgs/google-icon.svg"
            alt="Google Icon"
            className="w-5 h-5"
          />
          <span>Continue with Google</span>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
