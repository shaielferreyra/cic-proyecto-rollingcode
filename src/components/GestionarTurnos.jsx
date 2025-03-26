import React, { useState, useEffect } from "react";
import "../styles/GestionarTurnos.css";

const GestionarTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [fecha, setFecha] = useState("");
  const [horario, setHorario] = useState("");
  const medicoActual = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const storedTurnos = JSON.parse(localStorage.getItem("turnos")) || [];
    setTurnos(storedTurnos.filter(turno => turno.medico === medicoActual.email));
  }, []);

  const agregarTurno = () => {
    if (!fecha || !horario) {
      alert("Por favor ingresa una fecha y horario.");
      return;
    }

    const nuevoTurno = { medico: medicoActual.email, fecha, horario };
    const turnosActualizados = [...turnos, nuevoTurno];
    setTurnos(turnosActualizados);
    localStorage.setItem("turnos", JSON.stringify(turnosActualizados));
  };

  const eliminarTurno = (index) => {
    const turnosActualizados = turnos.filter((_, i) => i !== index);
    setTurnos(turnosActualizados);
    localStorage.setItem("turnos", JSON.stringify(turnosActualizados));
  };

  return (
    <div className="turnos-background">
      <div className="turnos-container">
         <h2>Gestionar Turnos</h2>
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      <input type="time" value={horario} onChange={(e) => setHorario(e.target.value)} />
      <button onClick={agregarTurno}>Agregar Turno</button>
      <ul>
        {turnos.map((turno, index) => (
          <li key={index}>
            {turno.fecha} - {turno.horario} 
            <button onClick={() => eliminarTurno(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default GestionarTurnos;
