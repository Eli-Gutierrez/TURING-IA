// Home.jsx
import { useNavigate } from "react-router-dom";
import "./MiProfileAdmin.css";

export default function Home() {
  const navigate = useNavigate();

  const datos = {
    usuario: "usuario@correo.com",
    pri_nombre: "Juan",
    seg_nombre: "Carlos",
    pri_apellido: "Pérez",
    seg_apellido: "Gómez",
    sexo: "Masculino",

   
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>MI PERFIL</h2>

        <label>Usuario:</label>
        <input type="text" value={datos.usuario} readOnly />

        <label>Primer nombre:</label>
        <input type="text" value={datos.pri_nombre} readOnly />

        <label>Segundo nombre:</label>
        <input type="text" value={datos.seg_nombre} readOnly />

        <label>Primer apellido:</label>
        <input type="text" value={datos.pri_apellido} readOnly />

        <label>Segundo apellido:</label>
        <input type="text" value={datos.seg_apellido} readOnly />

        <label>Sexo:</label>
        <input type="text" value={datos.sexo} readOnly />


        <button 
          className="login-btn"
          onClick={() => navigate("/Home")}
        >
          Volver
        </button>
      </div>
    </div>
  );
}
