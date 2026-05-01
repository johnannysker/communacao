import { FaHome, FaCalendarAlt, FaUser, FaClock, FaFlag } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-sm px-8 py-3 flex justify-center gap-10 text-sm">
      
      <NavLink to="/" className="flex flex-col items-center hover:text-pink-600">
        <FaHome />
        Home
      </NavLink>

      <NavLink to="/meus-eventos" className="flex flex-col items-center hover:text-pink-600">
        <FaCalendarAlt />
        Meus Eventos
      </NavLink>

      <div className="flex flex-col items-center text-gray-400">
        <FaUser />
        Perfil
      </div>

      <div className="flex flex-col items-center text-gray-400">
        <FaClock />
        Expirados
      </div>

      <div className="flex flex-col items-center text-gray-400">
        <FaFlag />
        Denúncia
      </div>
    </nav>
  );
}

export default Navbar;