function Hero() {
  return (
    <section
      className="h-[250px] flex items-center justify-center text-white text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac')",
      }}
    >
      <div className="bg-black/40 w-full h-full flex items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Encontre eventos sociais na sua comunidade
        </h2>
      </div>
    </section>
  );
}

export default Hero;