import { useState } from "react";
function StudentProfile(){
      const [isPublic, setIsPublic] = useState(false);
    const handleToggle =()=>{
       setIsPublic((prev) => !prev);
    }
return(
  <>
<div className="hidden md:block min-h-screen w-40 absolute left-0 top-0 bg-primary -z-40"></div>


<div className="bg-white min-h-fit pb-4 rounded-2xl flex-1 flex flex-col gap-12 z-40 ml-0 md:ml-10 max-w-2xl border border-gray-200 shadow-md">

   <div className=" relative bg-gradient-to-b from-blue-400 via-blue-300 to-amber-100  h-30 w-full rounded-t-2xl">
        
        <span className="absolute top-10 left-5 p-2 bg-white rounded-full w-34 h-34 flex items-center justify-center">
        <img src="/imgs/sarah.png" alt="profile picture" />
        </span>

        <span className="absolute top-2 right-2 p-2 bg-white rounded-full w-7 h-7 "></span>
   </div>
  
    <div className="w-full flex flex-col px-7 relative ">
        <p className="text-xl font-bold">Emma Smith</p>
        <p className="text-gray-500 text-sm mt-2">Student</p>
        <p className="text-gray-500 text-sm">Ifite Awka, Anambra State</p>

       <div className="flex gap-5  mt-17 md:mt-7 flex-wrap">
         <button
        className="bg-blue-500 text-white py-2 px-5 rounded-md h-10 ">
            Edit Profile
        </button>
        <button
        className="bg-white text-blue-500 py-2 px-5 rounded-md h-10 border border-blue-500">
            Settings
        </button>
       </div>

        <div className="flex flex-wrap justify-between mt-5 w-[90%] pr-5 gap-4">
           <span className="bg-[#f3f6fd] py-2 px-5 rounded-md h-16 w-40 ">About You</span>
           <span className="bg-[#f3f6fd]  py-2 px-5 rounded-md h-16 w-40 ">What you do</span> 
        </div>

           {/* toggle button */}
        <div className="flex items-center  space-x-2 bg-gray-50 p-2 rounded-md absolute top-20  md:top-0 md:right-5 gap-5">
            <span className="text-sm ">Show profile to Public</span>

            <label htmlFor="toggle" className="cursor-pointer relative inline-block w-10 h-5">
                <input
                type="checkbox"
                id="toggle"
                className="peer hidden"
                checked={isPublic}
                onChange={handleToggle}
                />
                <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>
                <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 transform transition-transform duration-300 peer-checked:translate-x-5"></div>
            </label>
        </div>

    </div>
   
 </div>
 </>
)
}
export default StudentProfile