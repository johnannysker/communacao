import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";

function Home() {
  const events = [
    {
      title: "Campanha do Agasalho",
      date: "12 Abril 2026",
      location: "Campina Grande",
      description: "Arrecadação de roupas para famílias carentes.",
      org: "Instituto Solidariedade",
      category: "Doação",
    },
    {
      title: "Doação de Alimentos",
      date: "20 Abril 2026",
      location: "João Pessoa",
      description: "Distribuição de alimentos para comunidades.",
      org: "ONG Alimentar",
      category: "Voluntariado",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <SearchBar />

      <section className="px-8 py-10 text-sm">
        <p className="text-gray-500 mb-4">
          Mostrando {events.length} eventos
        </p>

        <h3 className="text-lg font-semibold mb-4">
          Eventos em destaque
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;