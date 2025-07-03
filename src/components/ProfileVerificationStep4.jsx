import { CircleCheck, CloudUpload } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  setIdFront,
  setIdBack,
  setNextStep,
} from "../store/features/profile/profileVerificationSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProfileVerificationStep4() {
  const [frontPreview, setFrontPreview] = useState(null);
  const [backPreview, setBackPreview] = useState(null);
  const { idFront, idBack } = useSelector((state) => state.profileVerification);
  const dispatch = useDispatch();

  const frontRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    if (idFront) {
      const frontUrl = URL.createObjectURL(idFront);
      setFrontPreview(frontUrl);
      return () => URL.revokeObjectURL(frontUrl);
    }
  }, [idFront]);

  useEffect(() => {
    if (idBack) {
      const backUrl = URL.createObjectURL(idBack);
      setBackPreview(backUrl);
      return () => URL.revokeObjectURL(backUrl);
    }
  }, [idBack]);

  const handleFile = (file, action) => {
    if (!file || !file.type.startsWith("image/")) {
      alert("Only image files are allowed.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be under 10MB.");
      return;
    }

    dispatch(action(file));
  };

  const handleDrop = (e, setFile) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    handleFile(file, setFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleChange = (e, setFile) => {
    const file = e.target.files?.[0];
    handleFile(file, setFile);
  };

  const isValid = idFront && idBack;

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="bg-primary w-full flex items-center justify-between max-sm:px-3 xl:justify-between md:space-x-16 md:px-5 py-2 font-bold mb-6">
        <div className="flex items-center space-x-1">
          <img src="/svgs/blaze-nest-logo.svg" alt="Blaze Nest Logo" />
          <p className="bg-gradient-black-blue">Blaze Nest</p>
        </div>
      </header>

      <div className="flex-1 my-5 border border-gray-300 rounded-lg p-6 flex flex-col items-center space-y-6 max-w-5xl w-full">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Upload Your ID Document</h1>
          <p className="text-gray-500 max-w-md text-center">
            Please upload clear pictures of both the front and back of your ID.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          <div
            className="relative w-full h-64 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden cursor-pointer bg-white"
            onClick={() => frontRef.current?.click()}
            onDrop={(e) => handleDrop(e, setIdFront)}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              accept="image/*"
              ref={frontRef}
              className="hidden"
              onChange={(e) => handleChange(e, setIdFront)}
            />
            {frontPreview ? (
              <img
                src={frontPreview}
                alt="ID Front Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-gray-500">
                <span className="bg-[#C7E2FF] p-4 rounded-full mb-2">
                  <CloudUpload className="w-5 h-5 text-[#007AFF]" />
                </span>
                <p>Upload front of ID</p>
                <p className="text-sm text-gray-400 mt-1">
                  JPG, PNG, HEIC (max 10MB)
                </p>
              </div>
            )}
          </div>

          <div
            className="relative w-full h-64 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden cursor-pointer bg-white"
            onClick={() => backRef.current?.click()}
            onDrop={(e) => handleDrop(e, setIdBack)}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              accept="image/*"
              ref={backRef}
              className="hidden"
              onChange={(e) => handleChange(e, setIdBack)}
            />
            {backPreview ? (
              <img
                src={backPreview}
                alt="ID Back Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-gray-500">
                <span className="bg-[#C7E2FF] p-4 rounded-full mb-2">
                  <CloudUpload className="w-5 h-5 text-[#007AFF]" />
                </span>
                <p>Upload back of ID</p>
                <p className="text-sm text-gray-400 mt-1">
                  JPG, PNG, HEIC (max 10MB)
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-[#C7E2FF] rounded-lg w-full space-y-3 p-4 mt-5">
          <p>Tips for a successful verification:</p>
          <p className="flex items-center space-x-3">
            <CircleCheck className="text-[#007AFF]" />
            <span className="text-gray-500">
              Ensure all four corners of the ID are visible
            </span>
          </p>
          <p className="flex items-center space-x-3">
            <CircleCheck className="text-[#007AFF]" />
            <span className="text-gray-500">
              Make sure the photo is well-lit and clear
            </span>
          </p>
          <p className="flex items-center space-x-3">
            <CircleCheck className="text-[#007AFF]" />
            <span className="text-gray-500">
              Avoid glare or shadows on the document
            </span>
          </p>
        </div>

        <button
          disabled={!isValid}
          className={`rounded-xl py-2 px-4 w-full max-w-xs ${
            isValid
              ? "bg-[#007AFF] text-white cursor-pointer"
              : "bg-[#74777A] text-[#AAAAAA] cursor-not-allowed"
          }`}
          onClick={() => dispatch(setNextStep())}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
