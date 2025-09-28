import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    // Aquí puedes agregar lógica de logout (limpiar tokens, etc.)
    navigate("/"); // Redirige a la página de login
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>SIRHA</h1>
          <p>Sistema Académico</p>
        </div>

        <nav>
          <ul>
            <li className="active">
              <span className="material-icons">home</span> INICIO
            </li>
            <li 
              className="nav-item clickable"
              onClick={() => handleNavigation("/horario")}
            >
              <span className="material-icons">calendar_today</span> HORARIO
            </li>
            <li className="nav-item clickable">
              <span className="material-icons">traffic</span> SEMÁFORO
            </li>
            <li className="nav-item clickable">
              <span className="material-icons">description</span> SOLICITUDES
            </li>
          </ul>
        </nav>

        <div 
          className="logout clickable" 
          onClick={handleLogout}
        >
          <span className="material-icons">exit_to_app</span> SALIR
        </div>
      </aside>

      {/* Main content */}
      <main className="main">
        {/* Header */}
        <header className="header">
          <img
            src="https://img.genial.ly/60942d42948f6b0f9f6d906d/b8e7c67d-b995-4bd0-befe-a271a218ef78.png"
            alt="Logo Escuela Colombiana de Ingeniería"
          />
          <div className="profile-icon">
            <span className="material-icons">person_outline</span>
          </div>
        </header>

        {/* Content */}
        <div className="content">
          <h2>Enlace académico</h2>
          
          {/* Tarjeta ancha del estudiante */}
          <div className="student-wide-card">
            <div className="student-header">
              <div className="student-avatar-compact">
                <span className="material-icons">person</span>
              </div>
              <h3 className="student-name-wide">KEVIN CUITIVA</h3>
            </div>
            
            <div className="student-details-horizontal">
              <div className="detail-column">
                <div className="detail-item-wide">
                  <span className="detail-label-wide">Nombre completo:</span>
                  <span className="detail-value-wide">Kevin Arturo Cuitiva Pardo</span>
                </div>
                
                <div className="detail-item-wide">
                  <span className="detail-label-wide">Semestre:</span>
                  <span className="detail-value-wide">6</span>
                </div>
              </div>
              
              <div className="detail-column">
                <div className="detail-item-wide">
                  <span className="detail-label-wide">Carrera:</span>
                  <span className="detail-value-wide">Ingeniería de Sistemas</span>
                </div>
                
                <div className="detail-item-wide">
                  <span className="detail-label-wide">ID Estudiantil:</span>
                  <span className="detail-value-wide student-id-wide">2023-00123456</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>  
  );
}