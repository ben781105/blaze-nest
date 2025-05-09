import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function ResetPasswordForm() {
  const { role } = useParams();
  const [password, setPassword] = useState("");
  const isSixChars = password.length >= 6;
  const hasNumber = /\d/.test(password);

  return (
    <div className="w-full max-w-xl flex flex-col border rounded-xl py-20 px-5 relative overflow-x-hidden ">
      <Link to={`/verify-password/${role}`}>
        <img
          src="/svgs/left-arrow-icon.svg"
          alt="left-arrow-icon"
          className="absolute w-6 h-6 left-3 sm:left-6 top-8 cursor-pointer"
        />
      </Link>
      <h1 className="text-center text-black text-2xl">Reset Your Password</h1>
      <p className="text-center mt-2 text-gray-500">
        Please enter your new password
      </p>

      <form className="w-full mt-7 flex flex-col">
        <div className="flex flex-col mt-5 relative">
          <img
            className="absolute w-6 h-6  top-3 left-2 cursor-pointer"
            src="/svgs/padlock-icon.svg"
            alt="padlock icon"
          />
          <input
            className="w-full border border-gray-400 px-12 py-3 rounded-md focus:outline-blue-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="mt-2">Your password must contain</p>
        <div className="mt-4">
          <p className="flex items-center space-x-2">
            <span className={isSixChars ? "text-blue-600" : "text-gray-400"}>
              {isSixChars ? (
                <img
                  src="/svgs/good-password-icon.svg"
                  alt="good-password-icon"
                  width={20}
                />
              ) : (
                <img
                  src="/svgs/bad-password-icon.svg"
                  alt="bad-password-icon"
                  width={20}
                />
              )}
            </span>
            <span
              className={
                isSixChars ? "text-blue-600 font-medium" : "text-gray-400"
              }
            >
              at least 6 characters
            </span>
          </p>

          <p className="flex items-center space-x-2">
            <span className={hasNumber ? "text-blue-600" : "text-gray-400"}>
              {hasNumber ? (
                <img
                  src="/svgs/good-password-icon.svg"
                  alt="good-password-icon"
                  width={20}
                />
              ) : (
                <img
                  src="/svgs/bad-password-icon.svg"
                  alt="bad-password-icon"
                  width={20}
                />
              )}
            </span>
            <span
              className={
                hasNumber ? "text-blue-600 font-medium" : "text-gray-400"
              }
            >
              atleast 1 number
            </span>
          </p>
        </div>

        <button
          type="submit"
          className="w-40 h-12 self-center mt-8 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-3 rounded-md transition duration-200"
        >
          Done
        </button>
      </form>
    </div>
  );
}
export default ResetPasswordForm;
