import { GraduationCap, Landmark } from "lucide-react";
import { useState } from "react";

function ProfileVerificationStep2() {
  const [verificationMethod, setVerificationMethod] = useState(null);

  const handleVerificationMethod = (method) => {
    setVerificationMethod(verificationMethod === method ? null : method);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="bg-primary w-full flex items-center justify-between max-sm:px-3 md:justify-center xl:justify-between md:space-x-16 xl:px-5 py-2 font-bold mb-6">
        <div className="flex items-center space-x-1">
          <img src="/svgs/blaze-nest-logo.svg" alt="Blaze Nest Logo" />
          <p className="bg-gradient-black-blue">Blaze Nest</p>
        </div>
      </header>

      <div className="flex-1 my-5 border border-gray-300 rounded-lg p-6 flex flex-col items-center justify-between space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Choose Verification Method</h1>
          <p className="text-gray-500 max-w-md text-center">
            Select how you’d like to verify your identity
          </p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <div
            className={`flex flex-col justify-center items-center rounded-lg py-7 px-5 space-y-4 cursor-pointer ${
              verificationMethod === "studentId"
                ? "bg-[#C7E2FF] border-2 border-[#007AFF]"
                : "border border-gray-300"
            }`}
            onClick={() => handleVerificationMethod("studentId")}
          >
            <div className="bg-[#C7E2FF] p-4 rounded-full">
              <GraduationCap className="text-[#007AFF] w-10 h-10" />
            </div>
            <p className="font-medium">Upload Student ID</p>
            <p className="text-gray-500 max-w-md text-center">
              Use your university or college student identification card for
              verification
            </p>
          </div>
          <div
            className={`flex flex-col justify-center items-center rounded-lg py-7 px-5 space-y-4 cursor-pointer ${
              verificationMethod === "governmentId"
                ? "bg-[#C7E2FF] border-2 border-[#007AFF]"
                : "border border-gray-300"
            }`}
            onClick={() => handleVerificationMethod("governmentId")}
          >
            <div className="bg-[#C7E2FF] p-4 rounded-full">
              <Landmark className="text-[#007AFF] w-10 h-10" />
            </div>
            <p className="font-medium">Upload Government ID</p>
            <p className="text-gray-500 max-w-md text-center">
              Use your passport, driver’s license, or national identification
              card for verification
            </p>
          </div>
        </div>
        <button
          disabled={verificationMethod === null}
          className={`rounded-xl py-2 px-4 w-full max-w-xs ${
            verificationMethod !== null
              ? "bg-[#007AFF] text-white cursor-pointer"
              : "bg-[#74777A] text-[#AAAAAA] cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ProfileVerificationStep2;
