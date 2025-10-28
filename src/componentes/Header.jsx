import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

export default function Header({ carrito, setMostrarCarrito }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cerrar menú al cambiar de tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`main-header ${menuOpen ? 'menu-open' : ''}`}>
      {/* Logo */}
      <div className="logo">Bota de Oro</div>

      {/* Navegación */}
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-item" onClick={handleLinkClick}>Inicio</Link>
        <Link to="/futbol11" className="nav-item" onClick={handleLinkClick}>Fútbol 11</Link>
        <Link to="/futbol5" className="nav-item" onClick={handleLinkClick}>Fútbol 5</Link>
        <Link to="/futsal" className="nav-item" onClick={handleLinkClick}>Futsal</Link>
      </nav>

      {/* Carrito y favoritos */}
      <div className="icons">
        <span 
          className="icon carrito-icon" 
          onClick={() => setMostrarCarrito(true)} 
          style={{ cursor: "pointer", position: "relative" }}
        >
          🛒
          {carrito.length > 0 && (
            <span className="carrito-badge">{carrito.length}</span>
          )}
        </span>

        <span className="icon">❤️</span>

        {/* Botón hamburguesa */}
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Overlay para cerrar menú */}
      {menuOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}