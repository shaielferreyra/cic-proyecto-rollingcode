import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AuthStyles.css";

const Login = ({ setUserRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
      setUserRole(foundUser.role);
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      localStorage.setItem("isAuthenticated", "true");

      // 🔹 Notificar al Navbar que el usuario ha iniciado sesión
      window.dispatchEvent(new Event("storage"));

      if (foundUser.role === "paciente") {
        navigate("/reservar-turno");
      } else if (foundUser.role === "medico") {
        navigate("/gestionar-turnos");
      } else {
        alert("Rol no reconocido");
      }
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
        <p className="register-link">
          ¿Aún no tienes una cuenta? <a href="/register">Regístrate aquí</a>
        </p>
      </form>
    </div>
  );
};

export default Login;