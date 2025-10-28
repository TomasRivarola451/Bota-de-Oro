import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './inicio.css';
import HeroSlider from './HeroSlider';

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="inicio-page">
      {/* HERO CON VIDEO EN LA PARTE SUPERIOR */}
      <section className="hero-video-principal" id="hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-bg-hero"
          aria-label="Video hero mostrando acción de fútbol"
        >
          <source
            src="/videos/Untitled video - Made with Clipchamp.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay para mejorar contraste del texto */}
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="hero-contenido">
          <h1>Elegí tus botines, dominá la cancha</h1>
          <button onClick={() => navigate('/futbol11')}>Ver tienda</button>
        </div>
      </section>

      {/* SEPARADOR VISUAL CON FRASE */}
      <section className="separador-frase">
        <h2>"Tu juego empieza con lo que llevás en los pies"</h2>
        <p>Explorá las últimas tecnologías en calzado deportivo</p>
      </section>

      {/* SLIDER CON MARCAS */}
      <HeroSlider />

      {/* TIPO DE PISADA */}
      <section className="tipo-pisada">
        <h2>TIPO DE PISADA</h2>
        <div className="tipo-pisada-grid">
          <Link to="/futbol11" className="tipo-pisada-card">
            <img src="/images/pisadaf11.webp" alt="Fútbol 11" />
            <h3>FÚTBOL 11</h3>
          </Link>

          <Link to="/futbol5" className="tipo-pisada-card">
            <img src="/images/pisadaf5.webp" alt="Fútbol 5" />
            <h3>FÚTBOL 5</h3>
          </Link>

          <Link to="/futsal" className="tipo-pisada-card">
            <img src="/images/pisadafutsal.webp" alt="Futsal" />
            <h3>FUTSAL</h3>
          </Link>
        </div>
      </section>

      {/* SECCIÓN CON VIDEO INTERMEDIO */}
      <section className="video-fondo">
        <video className="video-bg-hero" autoPlay muted loop playsInline>
          <source src="/videos/Untitled video - Made with Clipchamp (1).mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>

        <div className="video-overlay">
          <h2>Jugá con estilo, jugá con decisión</h2>
          <p>Botines para cada tipo de fútbol</p>
        </div>
      </section>

      {/* COLECCION ADIDAS F50 */}
      <section className="coleccion-f50">
        <h2 className="titulo-coleccion">ADIDAS F50</h2>
        <div className="grid-f50">
          <div className="card-f50">
            <img src="/images/f502.PNG" alt="F50 Botín 1" />
          </div>
          <div className="card-f50">
            <img src="/images/f501.JPG" alt="F50 Botín 2" />
          </div>
          <div className="card-f50">
            <img src="/images/f503.PNG" alt="F50 Botín 3" />
          </div>
        </div>
      </section>

      {/* COLECCION NIKE */}
      <section className="coleccion-nike">
        <h2 className="titulo-coleccion">NIKE SUPERLFY</h2>
        <div className="grid-f50">
          <div className="card-f50">
            <img src="/images/mercurialdorado.jpg" alt="Nike Botín 1" />
          </div>
          <div className="card-f50">
            <img src="/images/tiempodroado.jpg" alt="Nike Botín 2" />
          </div>
          <div className="card-f50">
            <img src="/images/phantomdorado.jpg" alt="Nike Botín 3" />
          </div>
        </div>
      </section>

      {/* COLECCION PUMA */}
      <section className="coleccion-puma">
        <h2 className="titulo-coleccion">PUMA FUTURE 5</h2>
        <div className="grid-f50">
          <div className="card-f50">
            <img src="/images/PUMADEFINI1.png" alt="Puma Botín 1" />
          </div>
          <div className="card-f50">
            <img src="/images/PUMADEFINI2.png" alt="Puma Botín 2" />
          </div>
          <div className="card-f50">
            <img src="/images/PUMADEFINI3.png" alt="Puma Botín 3" />
          </div>
        </div>
      </section>

      {/* FRASE FINAL */}
      <p className="motivational-phrase">
        El talento gana partidos, pero la pasión elige tus botines. ⚽
      </p>
    </div>
  );
}
