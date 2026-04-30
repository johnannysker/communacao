import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";

function Home() {
  const events = [
    {
      title: "Campanha do Agasalho",
      date: "12 Abril 2026",
      location: "Campina Grande",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    },
    {
      title: "Doação de Alimentos",
      date: "20 Abril 2026",
      location: "João Pessoa",
      image: "https://images.unsplash.com/photo-1593113598332-cd59a93f7d84",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Categories />

      <section className="px-8 py-10">
        <h3 className="text-2xl font-bold mb-6">Eventos em destaque</h3>

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