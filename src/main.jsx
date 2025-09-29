import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Horario from "./components/Horario/Horario"; 
import Semaforo from "./components/Semaforo/Semaforo"; // 👈 importa tu nuevo componente
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/horario" element={<Horario />} />
        <Route path="/semaforo" element={<Semaforo />} /> {/* 👈 ruta para Semáforo */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
