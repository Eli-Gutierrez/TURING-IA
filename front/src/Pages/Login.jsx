import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate(); // Hook para redirigir

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>INICIO DE SESIÓN</h2>

        <label>Nombre de usuario</label>
        <input type="text" placeholder="Nombre de usuario" />

        <label>Contraseña</label>
        <input type="password" placeholder="Contraseña" />

        <button
          className="login-btn"
          onClick={() => navigate("/home")} // Redirige directamente sin validación
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}
