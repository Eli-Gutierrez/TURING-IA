import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
 const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert("Completa todos los campos");
      return;
    }

    setLoading(true);
    try {
      const response = await axiosClient.post("/login", form);

      if (response.data.success) {
        alert("Login exitoso!");
        // Puedes guardar token o datos del usuario aquí
        navigate("/home");
      } else {
        alert("Usuario o contraseña incorrecta");
      }
    } catch (error) {
      console.error("Error en login:", error);
      alert(error?.response?.data?.message || "Error en el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>INICIO DE SESIÓN</h2>

        <label>Correo</label>
        <input
          type="text"
          placeholder="Correo"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <button className="login-btn" onClick={handleLogin} disabled={loading}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>

        <p className="register-text">
          ¿No tiene una cuenta?{" "}
          <span className="register-link" onClick={() => navigate("/Registro")}>
            Regístrese aquí
          </span>
        </p>
      </div>
    </div>
  );
}
