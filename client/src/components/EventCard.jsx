function EventCard({ title, date, location, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-gray-500">{date}</p>
        <p className="text-gray-500">{location}</p>
      </div>
    </div>
  );
}

export default EventCard;