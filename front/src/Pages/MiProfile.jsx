import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { useNavigate } from "react-router-dom";
import "./MiProfile.css";

export default function MiProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        navigate("/"); // si no hay ID, redirigir al login
        return;
      }

      try {
        const response = await axiosClient.get(`/perfil/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("No se pudo cargar el perfil:", error);
        alert("No se pudo cargar el perfil");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  if (loading) return <p>Cargando perfil...</p>;
  if (!user) return <p>No se encontró el usuario.</p>;

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>MI PERFIL</h2>

       <label>Nombre completo:</label>
    <input type="text" value={user.Nombre_Completo} readOnly />

    <label>Email:</label>
    <input type="text" value={user.Email} readOnly />

        <button className="login-btn" onClick={() => navigate("/home")}>
          Volver
        </button>
      </div>
    </div>
  );
}
