import { ChevronDown, IdCard, School, UserPen } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  setFullName,
  setInstitution,
  setIdNumber,
  setNextStep,
} from "../store/features/profile/profileVerificationSlice";
import { useDispatch, useSelector } from "react-redux";

const institutions = [
  { label: "Institution 1", value: "institution1" },
  { label: "Institution 2", value: "institution2" },
  { label: "Institution 3", value: "institution3" },
];

function ProfileVerificationStep3() {
  const dispatch = useDispatch();
  const { fullName, institutionName, idNumber } = useSelector(
    (state) => state.profileVerification
  );

  const [isOpen, setIsOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [hasInteracted, setHasInteracted] = useState({
    fullName: false,
    institutionName: false,
    idNumber: false,
  }); // Track user interaction with the form fields to prevent showing errors before interaction
  const isFormFilled = fullName && institutionName && idNumber;
  const isFormValid = isFormFilled && Object.keys(formErrors).length === 0;

  const validateForm = useCallback(() => {
    const errors = {};

    if (!fullName.trim()) {
      errors.fullName = "Full name is required";
    } else if (fullName.length < 3) {
      errors.fullName = "Full name must be at least 3 characters";
    }

    if (!institutionName) {
      errors.institution = "Institution is required";
    }

    if (!idNumber.trim()) {
      errors.idNumber = "ID number is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [fullName, institutionName, idNumber]);

  useEffect(() => {
    validateForm();
  }, [fullName, institutionName, idNumber, hasInteracted, validateForm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const verificationData = {
      fullName,
      institutionName,
      idNumber,
    };

    console.log("Verification Data:", verificationData);
    dispatch(setNextStep());
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="bg-primary w-full flex items-center justify-between max-sm:px-3 xl:justify-between md:space-x-16 md:px-5 py-2 font-bold mb-6">
        <div className="flex items-center space-x-1">
          <img src="/svgs/blaze-nest-logo.svg" alt="Blaze Nest Logo" />
          <p className="bg-gradient-black-blue">Blaze Nest</p>
        </div>
      </header>

      <div className="flex-1 my-5 border border-gray-300 rounded-lg p-6 flex flex-col items-center justify-between space-y-6 max-w-2xl w-full">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold max-sm:text-2xl">
            Complete Your Verification
          </h1>
          <p className="text-gray-500 max-w-md text-center">
            Please provide your personal information for verification
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 w-full">
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="fullName">Full Name</label>
            <div className="relative w-full">
              <input
                type="text"
                id="fullName"
                className="peer border border-gray-300 w-full rounded-lg p-2 placeholder-transparent"
                placeholder="Enter your legal full name"
                value={fullName}
                onBlur={() =>
                  setHasInteracted((prev) => ({ ...prev, fullName: true }))
                }
                onChange={(e) => dispatch(setFullName(e.target.value))}
                required
              />
              <span className="absolute inset-y-0 space-x-3 flex items-center pl-3 text-gray-500 pointer-events-none peer-focus:hidden peer-valid:hidden">
                <span>
                  <UserPen className="w-4 h-4" />
                </span>
                <span className="max-sm:text-sm">
                  Enter your legal full name
                </span>
              </span>
            </div>
            {hasInteracted.fullName && formErrors.fullName && (
              <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>
            )}
          </div>

          <div className="w-full relative">
            <p id="institutionName" className="block mb-2">
              Institution Name
            </p>

            {/* Trigger Button */}
            <button
              aria-labelledby="institutionName"
              onBlur={() =>
                setHasInteracted((prev) => ({ ...prev, institutionName: true }))
              }
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 text-left focus:outline-none"
            >
              {institutionName ? (
                <span>
                  {
                    institutions.find((el) => el.value === institutionName)
                      .label
                  }
                </span>
              ) : (
                <span className="flex items-center text-gray-500 space-x-2">
                  <School className="w-4 h-4" />
                  <span className="max-sm:text-sm">
                    Select your institution
                  </span>
                </span>
              )}
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                {institutions.map((institution) => (
                  <div
                    key={institution.value}
                    onClick={() => {
                      dispatch(setInstitution(institution.value));
                      setIsOpen(false);
                    }}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  >
                    {institution.label}
                  </div>
                ))}
              </div>
            )}
            {hasInteracted.institutionName && formErrors.institution && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.institution}
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="idNumber">ID Number</label>
            <div className="relative w-full">
              <input
                type="text"
                id="idNumber"
                className="border border-gray-300 rounded-lg p-2 w-full peer placeholder-transparent"
                placeholder="Enter matric number or national ID number"
                value={idNumber}
                onBlur={() =>
                  setHasInteracted((prev) => ({ ...prev, idNumber: true }))
                }
                onChange={(e) => dispatch(setIdNumber(e.target.value))}
                required
              />
              <span className="absolute inset-y-0 space-x-3 flex items-center pl-3 text-gray-500 pointer-events-none peer-focus:hidden peer-valid:hidden">
                <span>
                  <IdCard className="w-4 h-4" />
                </span>
                <span className="max-sm:text-sm">
                  Enter matric number or national ID number
                </span>
              </span>
            </div>
            {hasInteracted.idNumber && formErrors.idNumber && (
              <p className="text-red-500 text-sm mt-1">{formErrors.idNumber}</p>
            )}
          </div>
        </div>
        <button
          disabled={!isFormValid}
          className={`rounded-xl py-2 px-4 w-full max-w-xs ${
            isFormValid
              ? "bg-[#007AFF] text-white cursor-pointer"
              : "bg-[#74777A] text-[#AAAAAA] cursor-not-allowed"
          }`}
          onClick={handleSubmit}
          type="submit"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ProfileVerificationStep3;
