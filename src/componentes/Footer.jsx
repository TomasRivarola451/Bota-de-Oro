import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Productos</h4>
          <ul>
            <li><a href="#">Botines Fútbol 11</a></li>
            <li><a href="#">Botines Fútbol 5</a></li>
            <li><a href="#">Botines Futsal</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Atención al Cliente</h4>
          <ul>
            <li><a href="#">Ayuda</a></li>
            <li><a href="#">Seguimiento de pedido</a></li>
            <li><a href="#">Devoluciones</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Trabajá con nosotros</a></li>
            <li><a href="#">Noticias</a></li>
          </ul>
        </div>

        <div className="footer-column social">
          <h4>Seguinos</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Bota de Oro. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
