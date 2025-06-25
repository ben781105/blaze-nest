import React from "react";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNotification } from "../store/features/ui/settingsSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

function ProfileSettings() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const settingsItems = [
    {
      id: 1,
      name: "Personal Details",
      route: `/personal-details/${user.role}`,
    },
    { id: 2, name: "Notification" },
    { id: 3, name: "Update Password" },
    { id: 4, name: "Update Email Address" },
    { id: 5, name: "Verification" },
    { id: 6, name: "Get Premium" },
    { id: 7, name: "Check Analytics" },
  ];
  return (
    <section className="w-full pl-3 sm:ml-5 max-w-sm mx-auto mt-10 sm:max-w-xl md:ml-4 md:max-w-2xl bg-gray-50 p-4 rounded-md shadow-sm">
      <span className="flex items-center justify-between w-full pr-4">
        <h1 className="font-bold text-xl">Settings</h1>
        <X onClick={() => navigate(-1)} className="cursor-pointer" />
      </span>

      <div className="flex flex-col w-full mt-8">
        {settingsItems.map((item) => (
          <span
            className="w-full flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer"
            key={item.id}
            onClick={() => {
              if (item.route) {
                navigate(item.route);
              }
            }}
          >
            <p>{item.name}</p>
            {item.name === "Notification" ? (
              <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md ">
                <label className="cursor-pointer relative inline-block w-10 h-5">
                  <input
                    type="checkbox"
                    className="peer hidden"
                    checked={settings.NotificationOn}
                    onChange={() => dispatch(toggleNotification())}
                  />
                  <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>
                  <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 transform transition-transform duration-300 peer-checked:translate-x-5"></div>
                </label>
              </div>
            ) : item.name === "Verification" ? (
              user.isVerified ? (
                <span className="text-green-500 text-sm font-medium">
                  Verified
                </span>
              ) : (
                <span className=" text-xs sm:text-sm text-red-500">
                  Not Verified
                </span>
              )
            ) : (
              <img src="/svgs/forward-arrow.svg" alt="" width={30} />
            )}
          </span>
        ))}
      </div>

      <div className="flex flex-col w-full pl-2 mt-6 ">
        <p
          onClick={() => setShowDeactivateModal(true)}
          className="text-blue-500 cursor-pointer"
        >
          Deactivate Account
        </p>

        <span
          className="w-full flex items-center justify-between pt-2 pb-2 mt-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => setShowLogoutModal(true)}
        >
          <h1>Logout</h1>
          <img src="/svgs/forward-arrow.svg" width={30} alt="" />
        </span>
      </div>
      <ConfirmModal
        isOpen={showDeactivateModal}
        title="Deactivate Account"
        confirmText="Yes"
        cancelText="No"
        confirmClass="bg-blue-600"
        onClose={() => setShowDeactivateModal(false)}
        onConfirm={() => {
          setShowDeactivateModal(false);
        }}
      />

      <ConfirmModal
        isOpen={showLogoutModal}
        title="Logout?"
        confirmText="Yes"
        cancelText="No"
        confirmClass="bg-blue-500"
        onClose={() => setShowLogoutModal(false)}
        onConfirm={() => {
          setShowLogoutModal(false);
        }}
      />
    </section>
  );
}

export default ProfileSettings;
