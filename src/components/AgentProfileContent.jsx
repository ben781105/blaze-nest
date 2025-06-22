import { useSelector } from "react-redux";

const AgentProfileContent = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="w-full z-40 flex flex-col px-7">
      <p className="text-xl font-bold">{user.name}</p>
      <p className="text-gray-500 text-sm mt-2">Agent</p>
      <p className="text-gray-500 text-sm">{user.location}</p>
      
      <div className="flex gap-5 mt-7 flex-wrap">
        <button className="bg-blue-500 text-white py-2 px-5 rounded-md h-10">Edit Profile</button>
        <button className="bg-white text-blue-500 py-2 px-5 rounded-md h-10 border border-blue-500">Settings</button>
      </div>
    
    </div>

    
  );
};

export default AgentProfileContent;
