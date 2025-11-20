// src/api/axiosClient.ts
import axios from "axios";

// URL de tu backend
const API_URL = "http://localhost:3000"; // ⚠️ Cambia por IP si usas dispositivo físico

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api/usuarios",
  timeout: 10000, // 10 segundos
});

// Interceptor opcional para enviar token automáticamente
axiosClient.interceptors.request.use((config) => {
  const token = ""; // aquí puedes poner tu token si manejas autenticación
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor de respuesta opcional para manejo de errores
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error en la petición axios:", error);
    return Promise.reject(error);
  }
);

export default axiosClient;
