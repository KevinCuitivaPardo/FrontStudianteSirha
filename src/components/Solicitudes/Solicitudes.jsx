import React from "react";
import { useNavigate } from "react-router-dom";
import "./Solicitudes.css";

const Solicitudes = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Función para manejar el logout con confirmación
  const handleLogout = () => {
    const confirmLogout = window.confirm("¿Estás seguro de que quieres salir de la aplicación?");
    
    if (confirmLogout) {
      // Aquí puedes agregar lógica adicional como limpiar localStorage, etc.
      navigate("/");
    }
    // Si el usuario cancela, no hace nada
  };

  return (
    <div className="solicitudes-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>SIRHA</h1>
          <p>Sistema Académico</p>
        </div>
        
        {/* NUEVO CONTENEDOR PARA CENTRAR EL MENÚ */}
        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <ul>
              <li
                className="nav-item clickable"
                onClick={() => handleNavigation("/dashboard")}
              >
                <span className="material-icons">home</span> INICIO
              </li>
              <li
                className="nav-item clickable"
                onClick={() => handleNavigation("/horario")}
              >
                <span className="material-icons">calendar_today</span> HORARIO
              </li>
              <li
                className="nav-item clickable"
                onClick={() => handleNavigation("/semaforo")}
              >
                <span className="material-icons">traffic</span> SEMÁFORO
              </li>
              <li className="nav-item active">
                <span className="material-icons">description</span> SOLICITUDES
              </li>
            </ul>
          </nav>
        </div>

        {/* Cambio aquí: usar handleLogout en lugar de handleNavigation directo */}
        <div
          className="logout clickable"
          onClick={handleLogout}
        >
          <span className="material-icons">logout</span> SALIR
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        {/* Header */}
        <header className="main-header">
          <div className="user-info">
            <img
              src="https://img.genial.ly/60942d42948f6b0f9f6d906d/b8e7c67d-b995-4bd0-befe-a271a218ef78.png"
              alt="Logo Escuela Colombiana de Ingenieria"
              className="logo"
            />
          </div>
          <div className="profile-icon">
            <span className="material-icons">person</span>
          </div>
        </header>

        <div className="content-section">

          {/* Formulario */}
          <section className="card">
            <div className="form-grid">
              <div>
                <label htmlFor="tipo-solicitud">Tipo Solicitud:</label>
                <input type="text" id="tipo-solicitud" />
              </div>
              <div>
                <label htmlFor="grupo-clase">Grupo/Clase:</label>
                <input type="text" id="grupo-clase" />
              </div>
              <div>
                <label htmlFor="no-catalogo">No Catálogo:</label>
                <input type="text" id="no-catalogo" />
              </div>
              <div>
                <label htmlFor="solicitud">Solicitud:</label>
                <input type="text" id="solicitud" />
              </div>
            </div>
            <div className="actions">
              <button>ENVIAR SOLICITUD</button>
            </div>
          </section>

          {/* Historial */}
          <section className="card">
            <div className="card-header">
              <h2>Historial Solicitudes</h2>
              <select>
                <option>Periodo Académico 2025-1</option>
                <option>Periodo Académico 2024-2</option>
              </select>
            </div>

            <div className="history">
              <div className="history-item">
                <p>
                  <b>Tipo Solicitud:</b> Inscribir/Adicionar clase
                </p>
                <p>
                  <b>N Catálogo:</b> PRI2IS
                </p>
                <p>
                  <b>Estado Solicitud:</b> Aprobada
                </p>
              </div>
              <div className="history-item empty">Sin más registros</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Solicitudes;