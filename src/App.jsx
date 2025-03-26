import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Slider from "./components/Slider";
import InfoSection from "./components/InfoSection";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import ReservarTurno from "./components/ReservarTurno";
import GestionarTurnos from "./components/GestionarTurnos";
import Cardiologia from "./components/Cardiologia";
import CirugiaCardiovascular from "./components/CirugiaCardiovascular";
import Ecocardiografia from "./components/Ecocardiografia";
import LaInstitucion from "./components/LaInstitucion"; // Nueva Importación
import React, { useState, useEffect } from "react";

const App = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUserRole(loggedInUser.role);
    }
  }, []);

  return (
    <Router>
      <NavbarComponent />
      <Routes>
        {/* Página Principal */}
        <Route path="/" element={<><Slider /><InfoSection /><CardsSection /></>} />
        
        {/* Autenticación */}
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />
        <Route path="/register" element={<Register />} />

        {/* Gestión de Turnos */}
        <Route 
          path="/reservar-turno" 
          element={userRole === "paciente" ? <ReservarTurno /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/gestionar-turnos" 
          element={userRole === "medico" ? <GestionarTurnos /> : <Navigate to="/login" />} 
        />

        {/* Especialidades */}
        <Route path="/especialidad-cardiologia" element={<Cardiologia />} />
        <Route path="/especialidad-cirugia" element={<CirugiaCardiovascular />} />
        <Route path="/especialidad-ecocardiografia" element={<Ecocardiografia />} />

        {/* Nueva Página: La Institución */}
        <Route path="/la-institucion" element={<LaInstitucion />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
