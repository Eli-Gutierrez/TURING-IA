import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import MiProfile from "./Pages/MiProfile"; // ← importar MiProfile
import Registro from "./Pages/Registro"; // ← importar MiProfile

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/MiProfile" element={<MiProfile />} /> {/* nueva ruta */}
                <Route path="/Registro" element={<Registro />} /> {/* nueva ruta */}
      </Routes>
    </Router>
  );
}
