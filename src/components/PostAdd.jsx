import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate,useLocation } from "react-router-dom";

function PostAdd(){
    const navigate = useNavigate();
    const location = useLocation()
    const selectedCategory= location.state?.category
    
  return (
    <section className="">
      <div className="bg-white w-full border border-gray-200 rounded-xl shadow-md p-3 space-y-6">
       
        <button 
        onClick={() => navigate(-1)} 
        className=" bg-primary rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <ArrowLeft />
        </button>

        
        <div className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
          <span className="text-gray-600">{selectedCategory}</span>
          <ArrowRight className="text-primary" />
        </div>

      <div className="space-y-2 border p-3 border-gray-200">
        <p className="text-sm font-medium ">Add photo</p>
        <p className="text-xs text-gray-500">First picture – is the title picture</p>

        <label
            htmlFor="photo-upload"
            className="cursor-pointer w-24 h-24 flex items-center justify-center bg-orange-100 rounded-lg text-4xl font-semibold"
        >
            +
            <input
            id="photo-upload"
            type="file"
            accept=".jpg,.png"
            className="hidden"
            onChange={(e) => {
                
                console.log(e.target.files[0]);
            }}
            />
        </label>

        <p className="text-xs text-gray-500">Supported format are *.jpg and *.png</p>
      </div>

        
        <textarea
          placeholder="Write a short description……"
          rows={5}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base focus:outline-none focus:border-primary "
        ></textarea>

       
        <div className=" flex flex-col space-y-2 pt-3 pb-3 pl-2 pr-2 border border-gray-200">
          <button className="w-[80%] self-center bg-orange-300 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-orange-400 transition cursor-pointer">
            POST ADD
          </button>

          <p className="text-sm text-gray-600 text-center">
            By clicking on Post Add you accept our{" "}
            <span className="text-primary underline">Terms & Condition</span>, that you
            will abide by the <span className="text-primary">Safety Tips</span>, and declare that this posting does not
            include any prohibited items.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostAdd;
