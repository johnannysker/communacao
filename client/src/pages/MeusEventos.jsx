import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function MeusEventos() {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("participando");

  const eventosParticipando = [
    { id: 1, title: "Doação de Alimentos", status: "Ativo" },
    { id: 2, title: "Mutirão de Limpeza", status: "Finalizado" },
  ];

  const eventosCriados = [
    { id: 3, title: "Campanha do Agasalho", status: "Ativo" },
  ];

  const eventos =
    activeTab === "participando"
      ? eventosParticipando
      : eventosCriados;

  return (
    <div className="p-8">

        <div className="flex items-center gap-3 mb-6">
            <button
            onClick={() => navigate("/")}
            className="text-xl cursor-pointer hover:text-green-600">
                <FaArrowLeft />
            </button>

            <h1 className="text-3xl font-bold">Meus Eventos</h1>
        </div>

      {/* Abas */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("participando")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "participando"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Participando
        </button>

        <button
          onClick={() => setActiveTab("criados")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "criados"
              ? "bg-green-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Criados
        </button>
      </div>

      {/* Botão criar */}
      {activeTab === "criados" && (
        <button className="mb-6 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
          + Criar Evento
        </button>
      )}

      {/* Lista */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventos.map((evento) => (
          <div
            key={evento.id}
            className="bg-white shadow-md rounded-xl p-4"
          >
            <h3 className="text-xl font-bold">{evento.title}</h3>

            <span
              className={`text-sm px-2 py-1 rounded-full ${
                evento.status === "Ativo"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {evento.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeusEventos;