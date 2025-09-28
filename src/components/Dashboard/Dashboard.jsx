import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
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
            <li>
              <span className="material-icons">calendar_today</span> HORARIO
            </li>
            <li>
              <span className="material-icons">traffic</span> SEMÁFORO
            </li>
            <li>
              <span className="material-icons">description</span> SOLICITUDES
            </li>
          </ul>
        </nav>

        <div className="logout">
          <span className="material-icons">exit_to_app</span> SALIR
        </div>
      </aside>

      {/* Main content */}
      <main className="main">
        {/* Header */}
        <header className="header">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDryXtmwLoDer4LXOBoM6P77TBtj4DRfwWH1txbtnx6g8DPTxak9Qzn_-E5Hh8JMrRg1bvxIvOkmWMWJab1ZJuq2x65ai-u-kMpFXC--eSoAuWqdWaK7xwbB4-8cgKHLuTJCk_CJRPu7gvp07ZSZS9en8iid_wRfUTqX0g9hs0JdnFbmYn8atp9B7LFCj_N9syzpOVi_rVdo47M2YXyqTYo0Ffh0teTSrmd10g1o4orkGJjSWb5Eh0gYHvPNbjPXC-cEkbj8wGEiHY"
            alt="Logo Universidad"
          />
          <div className="profile-icon">
            <span className="material-icons">person_outline</span>
          </div>
        </header>

        {/* Content */}
        <div className="content">
          <h2>Estado de tu cuenta</h2>
          <div className="cards">
            {/* Solicitudes */}
            <div className="card">
              <h3>Solicitudes</h3>
              <div className="card-actions">
                <button className="btn green">L-CAT GRUPO 2</button>
                <button className="btn green">L-CAT GRUPO 2</button>
                <button className="btn red">L-CAT GRUPO 2</button>
                <button className="btn red">L-CAT GRUPO 2</button>
              </div>
            </div>

            {/* Horario */}
            <div className="card">
              <h3>Horario</h3>
              <table>
                <thead>
                  <tr>
                    <th colSpan="2">Lunes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>7-8:30</td>
                    <td>CALI</td>
                  </tr>
                  <tr>
                    <td>8:30-10</td>
                    <td>CALI</td>
                  </tr>
                  <tr>
                    <td>10-11:30</td>
                    <td>CALI</td>
                  </tr>
                  <tr>
                    <td>11:30-1</td>
                    <td>CALI</td>
                  </tr>
                  <tr>
                    <td>1-2:30</td>
                    <td>CALI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Semáforo */}
            <div className="card">
              <h3>Semáforo</h3>
              <p><strong>Materias cursadas:</strong> 10</p>
              <p><strong>Materias por cursar:</strong> 4</p>
              <p><strong>Materias repetidas:</strong> 2</p>
              <p><strong>Pensum:</strong> 2025-2</p>
              <p><strong>Créditos activos:</strong> 16</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
