import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AuthStyles.css";

const Register = () => {
  const [role, setRole] = useState("paciente");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [credentials, setCredentials] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
  
    if (role === "medico" && !credentials) {
      alert("Debe proporcionar credenciales médicas.");
      return;
    }
  
    // Obtener usuarios existentes en localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Verificar si el correo ya está registrado
    if (users.some(user => user.email === email)) {
      alert("Este correo ya está registrado.");
      return;
    }
  
    // Agregar nuevo usuario
    const newUser = { email, password, role, credentials: role === "medico" ? credentials : null };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    navigate("/login");
  };
  

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleRegister}>
        <h2>Registro</h2>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="paciente">Paciente</option>
          <option value="medico">Médico</option>
        </select>
        <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" placeholder="Repetir Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        {role === "medico" && (
          <input type="text" placeholder="Número de licencia médica" value={credentials} onChange={(e) => setCredentials(e.target.value)} required />
        )}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
