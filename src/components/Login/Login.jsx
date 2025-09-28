import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Importar
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 👈 Hook para redirigir

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí podrías validar usuario y contraseña
    if (username && password) {
      console.log("ID Usuario:", username);
      console.log("Contraseña:", password);

      // Redirigir al dashboard
      navigate("/dashboard");
    } else {
      alert("Por favor ingresa usuario y contraseña");
    }
  };

  return (
    <div className="login-page">
      <div className="background-light"></div>
      <div className="form-container">
        <div className="form-box">
          <div className="form-header">
            <h1>SIRHA</h1>
            <img
              src="https://img.genial.ly/60942d42948f6b0f9f6d906d/b8e7c67d-b995-4bd0-befe-a271a218ef78.png"
              alt="Logo"
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">ID Usuario</label>
              <input
                type="text"
                id="username"
                placeholder="Ingrese su usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
