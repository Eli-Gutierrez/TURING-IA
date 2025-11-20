// src/api/productosClient.ts
import axios from "axios";

const API_URL = "http://localhost:3000";

const productosClient = axios.create({
  baseURL: `${API_URL}/api/productos`, 
  timeout: 10000,
});

// Interceptor para enviar token automáticamente
productosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Manejo de errores
productosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error en petición de productos:", error);
    return Promise.reject(error);
  }
);

export default productosClient;
