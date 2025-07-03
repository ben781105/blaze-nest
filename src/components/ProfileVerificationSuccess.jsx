import { ShieldCheck } from "lucide-react";
import { useSelector } from "react-redux";

function ProfileVerificationSuccess() {
  const verificationData = useSelector((state) => state.profileVerification);

  const handleSuccess = () => {
    console.log(verificationData);
  };
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="bg-primary w-full flex items-center justify-between max-sm:px-3 xl:justify-between md:space-x-16 md:px-5 py-2 font-bold mb-6">
        <div className="flex items-center space-x-1">
          <img src="/svgs/blaze-nest-logo.svg" alt="Blaze Nest Logo" />
          <p className="bg-gradient-black-blue">Blaze Nest</p>
        </div>
      </header>
      <div className="flex-1 my-5 border border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center space-y-10 max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold max-sm:text-2xl">
          ID Document Uploaded Successfully
        </h1>
        <p className="bg-[#AEF1B9] p-5 rounded-full">
          <ShieldCheck className="text-[#4DE566] w-16 h-16" />
        </p>
        <button
          className="rounded-xl py-2 px-4 w-full max-w-xs bg-[#007AFF] text-white cursor-pointer"
          onClick={handleSuccess}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}

export default ProfileVerificationSuccess;
