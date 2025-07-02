import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const AgentProfileContent = ({ verification }) => {
  const user = useSelector((state) => state.user);

  return (
    <div className="w-full z-40 flex flex-col px-7">
      <p className="text-xl font-bold">{user.name}</p>
      <p className="text-gray-500 text-sm mt-2">{user.role}</p>
      <p className="text-gray-500 text-sm">{user.location}</p>

      <div className="flex gap-5 mt-7 flex-wrap">
        <button className="bg-blue-500 text-white py-2 px-5 rounded-md h-10">
          Edit Profile
        </button>
        <button className="bg-white text-blue-500 py-2 px-5 rounded-md h-10 border border-blue-500">
          Settings
        </button>
      </div>

      {!verification && (
        <div className=" hidden sm:block text-center text-sm absolute left-[50%] translate-x-[-50%] translate-y-[-5%] ">
          <h2>Verification in progress</h2>
          <p>Started on May 21,2025</p>
          <Link
            className="text-green-500"
            to={`/verification-progress/${user.role}`}
          >
            View Progress
          </Link>
        </div>
      )}
    </div>
  );
};

export default AgentProfileContent;
