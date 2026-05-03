import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Preencha todos os campos.");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Email inválido.");
      return;
    }

    setError("");

    // 🔥 Aqui futuramente entra API
    console.log("Login enviado:", form);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600">

      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Entrar na conta
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="text-sm">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm">Senha</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button className="w-full bg-pink-600 text-white py-2 rounded-lg">
            Entrar
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Não tem conta?{" "}
          <Link to="/cadastro" className="text-pink-600">
            Cadastre-se
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;