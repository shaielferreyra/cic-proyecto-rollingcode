import React, { useEffect, useState } from "react";

const Turnos = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    setUser(loggedUser);
  }, []);

  if (!user) return <h2>Acceso denegado</h2>;

  return (
    <div>
      <h2>Gestión de Turnos</h2>
      {user.role === "paciente" ? (
        <p>Selecciona un especialista y horario</p>
      ) : (
        <p>Gestiona los turnos de tus pacientes</p>
      )}
    </div>
  );
};

export default Turnos;