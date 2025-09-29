import React from "react";
import { useNavigate } from "react-router-dom";
import "./Semaforo.css";

const Semaforo = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="Semaforo-container">
      <div className="dashboard">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="logo-section">
              <h1>SIRHA</h1>
              <p>Sistema Académico</p>
            </div>
          </div>

          <nav className="sidebar-nav">
            <ul>
              <li
                className="nav-item clickable"
                onClick={() => handleNavigation("/dashboard")}
              >
                <span className="material-icons">home</span>
                INICIO
              </li>
              <li
                className="nav-item clickable"
                onClick={() => handleNavigation("/horario")}
              >
                <span className="material-icons">calendar_today</span>
                HORARIO
              </li>
              <li
                className="nav-item clickable"
                onClick={() => handleNavigation("/semaforo")}
              >
                <span className="material-icons">traffic</span>
                SEMÁFORO
              </li>
              <li
                className="nav-item clickable"
                onClick={() => handleNavigation("/solicitudes")}
              >
                <span className="material-icons">description</span>
                SOLICITUDES
              </li>
            </ul>
          </nav>

          <div
            className="logout clickable"
            onClick={() => handleNavigation("/")}
          >
            <span className="material-icons">exit_to_app</span>
            SALIR
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="main-content">
          <header className="main-header">
            <div className="user-info">
              <img
                alt="Logo Escuela Colombiana de Ingeniería"
                className="logo-image"
                src="https://img.genial.ly/60942d42948f6b0f9f6d906d/b8e7c67d-b995-4bd0-befe-a271a218ef78.png"
              />
            </div>

            <div className="profile-icon">
              <span className="material-icons">person</span>
            </div>
          </header>

          {/* Contenedor de semestres */}
          <div className="semester-container">
            {/* Tabla Semestres 1 - 4 */}
            <table className="semester-table">
              <thead>
                <tr>
                  <th>Semestre 1</th>
                  <th>Semestre 2</th>
                  <th>Semestre 3</th>
                  <th>Semestre 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="time-slot">07:00 - 08:30</td>
                  <td>PRI2IS - 2</td>
                  <td>DOSW - 3</td>
                  <td>ODSC - 1L</td>
                </tr>
                <tr>
                  <td className="time-slot">08:30 - 10:00</td>
                  <td></td>
                  <td></td>
                  <td>ODSC - 1L</td>
                </tr>
                <tr>
                  <td className="time-slot">10:00 - 11:30</td>
                  <td></td>
                  <td>PRYE - 6</td>
                  <td>PRYE - 6</td>
                </tr>
                <tr>
                  <td className="time-slot">11:30 - 01:00</td>
                  <td></td>
                  <td>FIS2 - 10</td>
                  <td>FIS2 - 10</td>
                </tr>
                <tr>
                  <td className="time-slot">01:00 - 02:30</td>
                  <td>FUPR - 5</td>
                  <td></td>
                  <td>FUPR - 5</td>
                </tr>
                <tr>
                  <td className="time-slot">02:30 - 04:00</td>
                  <td>ODSC - 2</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            {/* Tabla Semestres 5 - 8 */}
            <table className="semester-table">
              <thead>
                <tr>
                  <th>Semestre 5</th>
                  <th>Semestre 6</th>
                  <th>Semestre 7</th>
                  <th>Semestre 8</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>ODSC - 2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>PRYE - 6</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>FIS2 - 10</td>
                  <td>FIS2 - 13L</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>DOSW - 301</td>
                  <td>PRI2IS - 2</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>DOSW - 301</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Semaforo;
