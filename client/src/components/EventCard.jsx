import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";

function EventCard({ title, date, location, org, description, category }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border">
      
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-base font-semibold">{title}</h4>
        <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
          {category}
        </span>
      </div>

      <p className="text-xs text-gray-500 flex items-center gap-2 mb-2">
        <FaCalendarAlt /> {date}
      </p>

      <p className="text-sm text-gray-600 mb-3">
        {description}
      </p>

      <div className="text-xs text-gray-500 space-y-1">
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt /> {location}
        </p>
        <p className="flex items-center gap-2">
          <FaUser /> {org}
        </p>
      </div>
    </div>
  );
}

export default EventCard;