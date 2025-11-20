import { useState } from "react";
import "./Registro.css";

export default function RegisterUser() {
  const [form, setForm] = useState({
    usuario: "",
    pri_nombre: "",
    seg_nombre: "",
    pri_apellido: "",
    seg_apellido: "",
    sexo: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Datos registrados:", form);
    alert("Usuario registrado (solo frontend, sin backend).");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>REGISTRAR USUARIO</h2>

        {/* USUARIO */}
        <label>Usuario:</label>
        <input
          type="text"
          name="usuario"
          value={form.usuario}
          onChange={handleChange}
          placeholder="Ingresa tu usuario"
        />

        {/* PRIMER NOMBRE */}
        <label>Primer nombre:</label>
        <input
          type="text"
          name="pri_nombre"
          value={form.pri_nombre}
          onChange={handleChange}
          placeholder="Ingresa tu primer nombre"
        />

        {/* SEGUNDO NOMBRE */}
        <label>Segundo nombre:</label>
        <input
          type="text"
          name="seg_nombre"
          value={form.seg_nombre}
          onChange={handleChange}
          placeholder="Ingresa tu segundo nombre"
        />

        {/* PRIMER APELLIDO */}
        <label>Primer apellido:</label>
        <input
          type="text"
          name="pri_apellido"
          value={form.pri_apellido}
          onChange={handleChange}
          placeholder="Ingresa tu primer apellido"
        />

        {/* SEGUNDO APELLIDO */}
        <label>Segundo apellido:</label>
        <input
          type="text"
          name="seg_apellido"
          value={form.seg_apellido}
          onChange={handleChange}
          placeholder="Ingresa tu segundo apellido"
        />

        {/* SEXO */}
        <label>Sexo:</label>
        <select name="sexo" value={form.sexo} onChange={handleChange}>
          <option value="">Seleccionar...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>

        {/* CONTRASEÑA */}
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Ingresa una contraseña"
        />

        <button className="login-btn" onClick={handleRegister}>
          Registrar
        </button>
      </div>
    </div>
  );
}
