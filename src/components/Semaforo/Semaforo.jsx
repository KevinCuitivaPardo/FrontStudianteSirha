import React from "react";
import { useNavigate } from "react-router-dom";
import "./Semaforo.css";

const Semaforo = () => {
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
    <div className="semaforo-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>SIRHA</h1>
          <p>Sistema Académico</p>
        </div>
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
            <li className="nav-item active">
              <span className="material-icons">traffic</span> SEMÁFORO
            </li>
            <li
              className="nav-item clickable"
              onClick={() => handleNavigation("/solicitudes")}
            >
              <span className="material-icons">description</span> SOLICITUDES
            </li>
          </ul>
        </nav>
        {/* Cambio aquí: usar handleLogout en lugar de handleNavigation directo */}
        <div
          className="logout clickable"
          onClick={handleLogout}
        >
          <span className="material-icons">logout</span> SALIR
        </div>
      </aside>

      {/* Main content */}
      <div className="main-content">
        <header className="main-header">
          <img
            src="https://img.genial.ly/60942d42948f6b0f9f6d906d/b8e7c67d-b995-4bd0-befe-a271a218ef78.png"
            alt="Logo"
          />
          <div className="profile-icon">
            <span className="material-icons">person</span>
          </div>
        </header>

        <section className="content-section">
          {/* Cards */}
          <div className="semaforo-cards">
            <div className="semaforo-card card-green">Aprobadas</div>
            <div className="semaforo-card card-yellow">En curso</div>
            <div className="semaforo-card card-red">Pendientes</div>
          </div>

          {/* Tablas */}
          <div className="semester-tables">
            <div className="semester-table">
              <h3>Semestres 1 - 4</h3>
              <table>
                <thead>
                  <tr>
                    <th>Semestre 1</th>
                    <th>Semestre 2</th>
                    <th>Semestre 3</th>
                    <th>Semestre 4</th>
                  </tr>
                </thead>
                <tbody>
            

                </tbody>
              </table>
            </div>

            <div className="semester-table">
              <h3>Semestres 5 - 8</h3>
              <table>
                <thead>
                  <tr>
                    <th>Semestre 5</th>
                    <th>Semestre 6</th>
                    <th>Semestre 7</th>
                    <th>Semestre 8</th>
                  </tr>
                </thead>
                <tbody>
                
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Semaforo;