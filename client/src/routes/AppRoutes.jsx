import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MeusEventos from "../pages/MeusEventos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meus-eventos" element={<MeusEventos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;