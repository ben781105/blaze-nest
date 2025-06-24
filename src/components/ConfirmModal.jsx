import { motion as Motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
const ConfirmModal = ({
  isOpen,
  title ,
  confirmText = "Yes",
  cancelText = "No",
  onClose,
  onConfirm,
  confirmClass = "bg-blue-600", 
}) => {
  const OutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          className="fixed inset-0 bg-opacity-30 backdrop-blur-xs flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={OutsideClick}
        >
          <Motion.div
            className="bg-white relative rounded-lg shadow-md p-6 w-[90%] max-w-xs"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h2 className="text-lg font-semibold text-center mb-6">{title}</h2>

            <div className="flex justify-center gap-4">
              <button
                onClick={onConfirm}
                className={`${confirmClass} text-white px-6 py-2 rounded-md font-medium cursor-pointer`}
              >
                {confirmText}
              </button>
              <button
                onClick={onClose}
                className="bg-red-600 cursor-pointer text-white px-6 py-2 rounded-md font-medium"
              >
                {cancelText}
              </button>
            </div>
            <div className="absolute top-2 right-2 cursor-pointer" onClick={onClose}>
              <X />
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;
