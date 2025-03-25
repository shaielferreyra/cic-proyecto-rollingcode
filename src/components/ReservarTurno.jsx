import React, { useState, useEffect } from "react";
import "../styles/ReservarTurno.css";

const ReservarTurno = () => {
  const [turnosDisponibles, setTurnosDisponibles] = useState([]);
  const pacienteActual = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const storedTurnos = JSON.parse(localStorage.getItem("turnos")) || [];
    setTurnosDisponibles(storedTurnos);
  }, []);

  const reservarTurno = (index) => {
    const turnosActualizados = turnosDisponibles.map((turno, i) => {
      if (i === index) {
        return { ...turno, paciente: pacienteActual.email };
      }
      return turno;
    });

    setTurnosDisponibles(turnosActualizados);
    localStorage.setItem("turnos", JSON.stringify(turnosActualizados));
  };

  return (
    <div className="turnos-background">
      <div className="turnos-container">
         <h2>Reservar Turno</h2>
      <ul>
        {turnosDisponibles.map((turno, index) => (
          <li key={index}>
            {turno.fecha} - {turno.horario} - {turno.medico} 
            {turno.paciente ? (
              <span>Reservado</span>
            ) : (
              <button onClick={() => reservarTurno(index)}>Reservar</button>
            )}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ReservarTurno;
