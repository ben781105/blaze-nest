function ProfileVerificationStep1() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 flex justify-center items-center bg-gray-100 max-sm:hidden">
        <img
          src="/imgs/verification.png"
          alt="Verification Image"
          className="w-full h-screen aspect-square object-cover"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-between">
        <header className="bg-primary w-full flex items-center justify-between max-sm:px-3 md:justify-center xl:justify-between md:space-x-16 xl:px-5 py-2 font-bold">
          <div className="flex items-center space-x-1">
            <img src="/svgs/blaze-nest-logo.svg" alt="Blaze Nest Logo" />
            <p className="bg-gradient-black-blue">Blaze Nest</p>
          </div>
        </header>

        <div className="flex-1 flex flex-col justify-center items-center px-6">
          <div className="mb-6 flex flex-col items-center justify-center">
            <div className="flex items-center space-x-1 mb-2">
              <img src="/svgs/blaze-nest-logo.svg" alt="Blaze Nest Logo" />
              <p className="bg-gradient-black-blue font-bold">Blaze Nest</p>
            </div>
            <p className="text-[#5DA1EC] text-xl font-semibold">
              Verify Your Blaze Nest Account
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-5">
            <div className="rounded-full bg-[#FFF8E5] p-2">
              <img
                src="/svgs/shield-tick.svg"
                alt="Shield"
                className="w-20 h-20"
              />
            </div>
            <div className="text-center space-y-5">
              <p>
                To ensure the security of your account and protect your data, we
                need to verify your identity. This process will only take a few
                minutes.
              </p>
              <button className="bg-[#007AFF] text-white py-2 px-5 rounded-lg cursor-pointer">
                Start Verification
              </button>
              <p>
                Having trouble?{" "}
                <span className="text-[#007AFF] cursor-pointer">
                  Contact Support
                </span>
              </p>
            </div>
          </div>
        </div>

        <footer className="p-4 text-center text-sm bg-[#007AFF] text-white">
          @ {new Date().getFullYear()} Blaze Nest, All rights reserved
        </footer>
      </div>
    </div>
  );
}

export default ProfileVerificationStep1;
