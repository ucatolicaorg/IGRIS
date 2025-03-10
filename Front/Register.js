import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [rol, setRol] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { nombre, email, contraseña, rol });
      alert("Usuario registrado exitosamente");
    } catch (error) {
      alert("Error en el registro");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" required />
      <input type="text" value={rol} onChange={(e) => setRol(e.target.value)} placeholder="Rol" required />
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Register;
