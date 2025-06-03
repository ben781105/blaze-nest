import { Edit } from "lucide-react";

function LodgeCard({ title, location, price, imageUrl }) {
  return (
    <div className="rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{location}</p>
            <p className="text-sm font-medium text-gray-800 mt-2">{price}</p>
          </div>
          <button className="ml-4 px-4 py-1.5 border rounded text-blue-500 border-blue-500 hover:bg-blue-50 transition-colors duration-200 flex items-center gap-1.5 cursor-pointer">
            <Edit size={14} />
            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LodgeCard;
