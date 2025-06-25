import { useSelector, useDispatch } from "react-redux";
import StudentProfileContent from "../StudentProfileContent";
import AgentProfileContent from "../AgentProfileContent";
import { setPublicProfile } from "../../store/features/profile/profileSlice";

const ProfileLayout = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-10 h-full -z-10 absolute left-0 top-0 bg-primary"></div>
      <section className="bg-white   pb-4 flex flex-col gap-12 ml-4 mr-4 border border-gray-200 shadow-md ">
        <div className="relative flex items-center justify-center z-40 bg-gradient-to-b from-blue-400 via-blue-300 to-amber-100 h-30 w-full ">
          <div className="flex text-center md:place-self-center place-self-start justify-start flex-col">
            {user.isVerified ? (
              <h1 className="text-white md:text-xl">Account Verified!</h1>
            ) : (
              <h1 className="text-white text-sm  md:text-xl">
                Account Not Verified
              </h1>
            )}

            {user.isVerified ? (
              <p className="text-sm">
                Explore,List and Enjoy the Fun of Blaze Nest
              </p>
            ) : (
              <p className="text-sm">
                Verify Your Account to unlock All Features
              </p>
            )}
          </div>

          <span className="absolute top-4 right-5 p-2 bg-white rounded-full w-8 h-8 flex items-center justify-center"></span>

          <span className="absolute top-10 left-5 p-2 bg-white rounded-full w-28 h-28 sm:w-34  sm:h-34 flex items-center justify-center">
            {
              <img
                src={user.profileImage || "/svgs/camera-icon.svg"}
                alt="profile"
              />
            }
          </span>

          {user.isVerified && (
            <img
              src="/svgs/verified-badge-icon.svg"
              alt="verified"
              width={28}
              className="absolute left-32 top-36"
            />
          )}

          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md absolute top-40 right-0 md:right-20">
            <span className="text-sm">
              {" "}
              set to {user.isPublic ? "Private" : "Public"}
            </span>
            <label className="cursor-pointer relative inline-block w-10 h-5">
              <input
                type="checkbox"
                className="peer hidden"
                checked={user.isPublic}
                onChange={() => dispatch(setPublicProfile())}
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>
              <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 transform transition-transform duration-300 peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>

        {user.role === "student" ? (
          <StudentProfileContent verification={user.VerificationInProgress} />
        ) : (
          <AgentProfileContent verification={user.VerificationInProgress} />
        )}

        <div className="pl-6 pr-4 w-full">
          <div className="mt-10 space-y-2">
            <h1>Bio 🖋️</h1>
            <div className="border border-gray-300 h-30 p-3 pt-6">
              {user.bio}
            </div>
          </div>

          <div
            className={`mt-10 w-full space-y-5 ${
              user.isVerified ? "opacity-100" : "opacity-50"
            }`}
          >
            <h1>My Listings</h1>
            <div className="w-full flex gap-6 md:gap-5 flex-col text-sm">
              {user.listings.map((listing) => (
                <div key={listing.id} className="flex w-full md:gap-6  h-fit  ">
                  <div className="w-1/2 md:w-50 md:h-40 h-40 ">
                    <img
                      className="w-full h-full object-fit"
                      src={listing.image}
                      alt={listing.name}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-3 md:gap-6 pt-3 pl-3 w-1/2">
                    <span className="space-y-1">
                      <p>{listing.name}</p>
                      <p>{listing.status}</p>
                      <p>{listing.price}</p>
                      <p className="mt-4 text-gray-400">
                        {" "}
                        Posted {listing.posted}
                      </p>
                    </span>
                    <div className="flex gap-3 ">
                      <button className=" border border-blue-500 h-9 w-15 rounded-lg">
                        Edit
                      </button>
                      <button className="border border-red-500 p-1 h-9 w-22 rounded-lg">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              )) || <p>Your listing will appear here</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileLayout;
