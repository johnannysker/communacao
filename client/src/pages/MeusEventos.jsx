import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

function MeusEventos() {
  const [activeTab, setActiveTab] = useState("participando");

  // Mock - eventos que o usuário participa
  const participando = [
    {
      title: "Mutirão de Saúde",
      date: "20 Abril 2026",
      location: "João Pessoa",
      description: "Atendimento médico gratuito.",
      org: "Prefeitura",
      category: "Ajuda Humanitária",
    },
    {
      title: "Limpeza de Praias",
      date: "25 Abril 2026",
      location: "Recife",
      description: "Ação ambiental com voluntários.",
      org: "EcoBrasil",
      category: "Evento Regional",
    },
  ];

  // Mock - eventos criados pelo usuário
  const criados = [
    {
      title: "Campanha do Agasalho",
      date: "12 Abril 2026",
      location: "Campina Grande",
      description: "Arrecadação de roupas para famílias carentes.",
      org: "Instituto Solidariedade",
      category: "Doação",
    },
  ];

  // Alterna lista conforme aba
  const eventos =
    activeTab === "participando" ? participando : criados;

  return (
    <>
      <Header />
      <Navbar />

      <section className="px-8 py-10 text-sm">

        {/* Título */}
        <h1 className="text-lg font-semibold mb-4">
          Meus Eventos
        </h1>

        {/* Abas */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("participando")}
            className={`px-4 py-2 rounded-full transition ${
              activeTab === "participando"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Participando
          </button>

          <button
            onClick={() => setActiveTab("criados")}
            className={`px-4 py-2 rounded-full transition ${
              activeTab === "criados"
                ? "bg-green-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Criados
          </button>
        </div>

        {/* Mensagem caso não tenha eventos */}
        {eventos.length === 0 && (
          <p className="text-gray-500">
            Nenhum evento encontrado.
          </p>
        )}

        {/* Grid de eventos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

      </section>
    </>
  );
}

export default MeusEventos;