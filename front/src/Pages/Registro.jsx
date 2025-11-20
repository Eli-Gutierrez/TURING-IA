import { useState } from "react";
import RegistroClient from "../../api/RegistroClient";
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

  const [loading, setLoading] = useState(false); // Para deshabilitar el botón mientras carga

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validación mínima
    if (!form.usuario || !form.pri_nombre || !form.pri_apellido || !form.password) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }

    setLoading(true);

    try {
      const { data } = await RegistroClient.post("/registrar", form);

// o también
// RegistroClient.post("", form);

 // Endpoint de registro

      if (data.ok) {
        alert("Usuario registrado correctamente");
        // Limpiar formulario
        setForm({
          usuario: "",
          pri_nombre: "",
          seg_nombre: "",
          pri_apellido: "",
          seg_apellido: "",
          sexo: "",
          password: "",
        });
      } else {
        alert("Error: " + data.msg);
      }
    } catch (error) {
      if (error.response) {
        alert("Error: " + (error.response.data.msg || "Error en el backend"));
      } else {
        alert("Error de conexión con el servidor.");
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>REGISTRAR USUARIO</h2>

        <label>Usuario:</label>
        <input
          type="text"
          name="usuario"
          value={form.usuario}
          onChange={handleChange}
          placeholder="Ingresa tu usuario"
        />

        <label>Primer nombre:</label>
        <input
          type="text"
          name="pri_nombre"
          value={form.pri_nombre}
          onChange={handleChange}
          placeholder="Ingresa tu primer nombre"
        />

        <label>Segundo nombre:</label>
        <input
          type="text"
          name="seg_nombre"
          value={form.seg_nombre}
          onChange={handleChange}
          placeholder="Ingresa tu segundo nombre"
        />

        <label>Primer apellido:</label>
        <input
          type="text"
          name="pri_apellido"
          value={form.pri_apellido}
          onChange={handleChange}
          placeholder="Ingresa tu primer apellido"
        />

        <label>Segundo apellido:</label>
        <input
          type="text"
          name="seg_apellido"
          value={form.seg_apellido}
          onChange={handleChange}
          placeholder="Ingresa tu segundo apellido"
        />

        <label>Sexo:</label>
        <select name="sexo" value={form.sexo} onChange={handleChange}>
          <option value="">Seleccionar...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Ingresa una contraseña"
        />

        <button
          className="login-btn"
          onClick={handleRegister}
          disabled={loading} // Deshabilita mientras registra
        >
          {loading ? "Registrando..." : "Registrar"}
        </button>
      </div>
    </div>
  );
}
