import { FaBell, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-green-600">ComunAção</h1>

        <ul className="hidden md:flex gap-6 font-medium">
            <li>
                <Link to="/" className="hover:text-green-600">
                Home
                </Link>
            </li>
            <li>
                <Link to="/meus-eventos" className="hover:text-green-600">
                Meus Eventos
                </Link>
            </li>
        </ul>

      <div className="flex items-center gap-4 text-2xl">
        <FaBell className="cursor-pointer" />
        <FaUserCircle className="cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;