import React, { useState } from "react";
import "./Loginc.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ID Usuario:", username);
    console.log("Contraseña:", password);
    alert(`Usuario: ${username}\nContraseña: ${password}`);
  };

  return (
    <div className="login-page">
      {/* Fondo decorativo */}
      <div className="background-light"></div>

      {/* Contenedor del formulario */}
      <div className="form-container">
        <div className="form-box">
          <div className="form-header">
            <h1>SIRHA</h1>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYo3yrEh9M9NibQfM7mWeHIHgaJI8h0ocTM-PP_ApGnFN6i9ZTNIafiBSC5Ar4DP6w21aZJX30O_pebz8MX89A7IQblMZohDzfJmsJwYHSdmynohhBBc09fMbTlGU38GxmDaf_FK0ghQFClT94EQiFE-pnzxVWu6JR41b_mRhKyaVbESd8ntiBg34ZmJzs7bVp1vPX4Dz6kHRqoxvuf8awF04w8JgdGCvBfdwmH-KOizmVdeOzxAFlFiosb4DcnGgY03GesAyHDZMZ"
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
