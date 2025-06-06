import { Link, useParams, useNavigate } from "react-router-dom";
import leftArrow from "/svgs/left-arrow-icon.svg";
import { useRef, useState, useEffect } from "react";
function VerifyPasswordForm() {
  const { role } = useParams();
  const inputsRef = useRef([]);
  const [timeLeft, setTimeLeft] = useState(180);
  const timerRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    clearInterval(timerRef.current);
    setTimeLeft(180);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSendAgain = () => {
    startTimer();
  };

  const formatTime = (secs) => {
    const minutes = String(Math.floor(secs / 60)).padStart(2, "0");
    const seconds = String(secs % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 4); // Limit to 4 characters
    const inputsArray = pasteData.split("");
    inputsArray.forEach((char, i) => {
      if (i < inputsRef.current.length) {
        inputsRef.current[i].value = char;
        if (i < inputsArray.length - 1) {
          inputsRef.current[i + 1].focus();
        }
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = inputsRef.current.map((input) => input.value).join("");
    console.log(code);
    inputsRef.current.forEach((input) => {
      if (input) input.value = "";
    });
    inputsRef.current[0]?.focus();
    setTimeLeft(0);
    navigate(`/reset-password/${role}`);
  };

  return (
    <div className="w-full max-w-xl flex flex-col border rounded-xl py-20 px-5 relative overflow-x-hidden ">
      <Link to={`/password-recovery/${role}`}>
        <img
          src={leftArrow}
          alt="left-arrow-icon"
          className="absolute w-6 h-6 left-3 sm:left-10 top-8 cursor-pointer"
        />
      </Link>
      <h1 className="text-center text-2xl ">Check Your Email</h1>
      <p className="text-center mt-2 text-gray-500">
        We have sent the code to your email
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-7 flex flex-col items-center"
      >
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {[0, 1, 2, 3].map((_, index) => (
            <input
              ref={(el) => (inputsRef.current[index] = el)}
              key={index}
              type="text"
              required
              inputMode="numeric"
              maxLength="1"
              className="w-16 h-16 sm:w-20 sm:h-20 text-xl sm:text-2xl font-bold text-center border-2 border-blue-200 rounded-lg focus:outline-blue-600"
              onInput={(e) => handleInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
            />
          ))}
        </div>
        <p className="text-center mt-2 text-sm sm:text-base ">
          Code expires in:{" "}
          <span className="font-medium">{formatTime(timeLeft)}</span>
        </p>

        <button
          type="submit"
          className="w-40 h-12 self-center mt-8 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-3 rounded-md transition duration-200"
        >
          Verify
        </button>
      </form>

      <button
        onClick={handleSendAgain}
        disabled={timeLeft > 0}
        className="w-40 h-12 self-center mt-4 bg-white cursor-pointer text-blue-600 font-semibold py-3 rounded-md transition duration-200 border border-blue-600
          disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send again
      </button>
    </div>
  );
}
export default VerifyPasswordForm;
