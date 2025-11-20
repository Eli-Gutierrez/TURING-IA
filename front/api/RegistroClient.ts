import axios from "axios";

const API_URL = "http://localhost:3000";

const RegistroClient = axios.create({
  baseURL: `${API_URL}/api/usuarios`, // Ya incluye /usuarios
  timeout: 10000,
});

RegistroClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error("No se pudo conectar al servidor:", error);
    } else {
      console.error("Error en la respuesta del backend:", error.response.data);
    }
    return Promise.reject(error);
  }
);

export default RegistroClient;

