const categories = ["Doação", "Voluntariado", "Educação", "Saúde"];

function Categories() {
  return (
    <section className="px-8 py-10">
      <h3 className="text-2xl font-bold mb-6">Categorias</h3>

      <div className="flex flex-wrap gap-4">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="bg-green-100 text-green-700 px-5 py-2 rounded-full hover:bg-green-600 hover:text-white"
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categories;