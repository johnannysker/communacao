import logo from "../assets/comunacao.png"; // coloque o ícone que você mandou aqui
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

function Header() {
  return (
    <header className="bg-gradient-to-r  from-purple-900 to-pink-500 text-white px-8 py-4 flex justify-between items-center">
      
      {/* Logo + Nome */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <div>
          <h1 className="text-xl font-bold">ComunAção</h1>
          <p className="text-sm opacity-90">
            Plataforma que conecta pessoas a eventos sociais
          </p>
        </div>
      </div>

      {/* Botão */}
      <button onClick={() => navigate("/login")}
        className="bg-white text-pink-600 px-4 py-2 rounded-lg font-medium hover:opacity-90">
        Entrar / Cadastrar
      </button>
    </header>
  );
}

export default Header;