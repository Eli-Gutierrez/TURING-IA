import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productosClient from "../../api/productosClient";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar productos desde el backend
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const response = await productosClient.get("/ordenados");
        setProductos(response.data);
      } catch (error) {
        console.error("Error cargando productos:", error);
        alert("No se pudieron cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  return (
    <div>
      <header className="header">
        <h1>Tienda Tech</h1>
        <div className="header-buttons">
          <button onClick={() => navigate("/MiProfile")}>MiPerfil</button>
          <button onClick={() => alert("Ordenar productos")}>Ordenar</button>
          <button onClick={() => navigate("/")}>Salir</button>
        </div>
      </header>

      {/* INFO INTERMEDIA */}
      <section className="info-section">
        <div className="info-left">
          <button className="info-btn">BIENVENIDO</button>
        </div>
        <div className="info-right">
          <p>Accesorios</p>
          <p>PC's</p>
          <p>Laptops</p>
          <p>Proximamente</p>
        </div>
      </section>

      <main className="home-content">

        {/* HERO */}
        <section className="hero">
          <h2>La mejor tecnología al mejor precio</h2>
          <p>Explora nuestro catálogo y encuentra lo último en innovación.</p>
          <button className="hero-btn">Ver productos</button>

          <div className="hero-cards">
            <div className="hero-card"></div>
            <div className="hero-card"></div>
            <div className="hero-card"></div>
          </div>
        </section>

        {/* PRODUCTOS DESTACADOS */}
        <section className="products-section">
          <h3>Productos destacados</h3>

          {loading ? (
            <p>Cargando productos...</p>
          ) : (
            <div className="product-grid">
              {productos.map((p, index) => (
                <div key={index} className="product-card">
                  <div className="product-img">
                    {/* Imagen desde la BD */}
                    <img
                      src={`http://localhost:3000${p.imagen}`} 
                      alt={p.nombre}
                      onError={(e) => {
                        e.target.src = "/placeholder.png"; // En caso de error
                      }}
                    />
                  </div>

                  <h4>{p.nombre}</h4>
                  <p>Categoría: {p.categoria}</p>
                  <p>Precio: ${p.precio}</p>
                  <button className="btn-buy">Comprar</button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* CATEGORÍAS */}
        <section className="categories">
          <h3>Categorías</h3>
          <div className="category-grid">
            <div className="category-tile"></div>
            <div className="category-tile"></div>
            <div className="category-tile striped"></div>
            <div className="category-tile striped"></div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features">
          <h3>¿Por qué elegirnos?</h3>
          <div className="feature-list">
            <div className="feature-item">
              <div className="circle"></div>
              <p>Envío rápido</p>
            </div>
            <div className="feature-item">
              <div className="circle"></div>
              <p>Garantía</p>
            </div>
            <div className="feature-item">
              <div className="circle"></div>
              <p>Soporte 24/7</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-left">
          <div className="social-icon">
            <FaFacebookF /> TiendaTech
          </div>
          <div className="social-icon">
            <FaTwitter /> @TiendaTech
          </div>
          <div className="social-icon">
            <FaInstagram /> @TiendaTech_MX
          </div>
          <div className="social-icon">
            <FaLinkedinIn /> TiendaTech
          </div>
        </div>

        <div className="footer-right">
          <p>Tienda Tech © 2025</p>
          <p>Contacto: info@tiendatech.com</p>
        </div>
      </footer>
    </div>
  );
}
