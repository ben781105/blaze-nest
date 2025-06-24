import {  useSelector } from "react-redux";
import { Link,useNavigate} from "react-router-dom";
const StudentProfileContent = ({verification}) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <div className="  flex flex-col px-7 relative">
      <p className="text-xl font-bold">{user.name}</p>
      <p className="text-gray-500 text-sm mt-2">{user.role}</p>
      <p className="text-gray-500 text-sm">{user.location || 'set location'}</p>
       
       
      <div className="flex gap-5 mt-7 flex-wrap">
        <button className="bg-blue-500 cursor-pointer text-white py-2 px-5 rounded-md h-10">Edit Profile</button>
        <button className="bg-white cursor-pointer text-blue-500 py-2 px-5 rounded-md h-10 border border-blue-500"
        onClick={() => navigate(`/profile-settings/${user.role}`)}>
          Settings
        </button>
      </div>
       
        {!verification && 
       
         <div className=" hidden sm:block text-center text-sm absolute left-[50%] translate-x-[-50%] translate-y-[-5%] ">
          <h2>Verification in progress</h2>
          <p>Started on {user.VerificationStartedAt}</p>
          <Link className="text-green-500 " to={`/verification-progress/${user.role}`}>View Progress</Link>
         </div>
         }
    </div>
  );
};

export default StudentProfileContent;
