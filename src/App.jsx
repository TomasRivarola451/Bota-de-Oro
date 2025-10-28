import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./componentes/ScrollToTop";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import futbol11 from "./data/futbol11";
import futbol5 from "./data/futbol5";
import futsal from "./data/futsal";
import Listado from "./componentes/Listado";
import DetalleProducto from "./componentes/DetalleProducto";
import Inicio from "./componentes/Inicio";
import Carrito from "./componentes/Carrito";

function App() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const categorias = { futbol11, futbol5, futsal };

  const tituloCategoria = {
    futbol11: "Fútbol 11",
    futbol5: "Fútbol 5",
    futsal: "Futsal",
  };

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === producto.id);
      if (existe) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  const quitarDelCarrito = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const vaciarCarrito = () => setCarrito([]);

  const finalizarCompra = () => {
    alert("¡Gracias por tu compra!");
    setCarrito([]);
    setMostrarCarrito(false);
    localStorage.removeItem("carrito");
  };

  useEffect(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      try {
        const carritoParseado = JSON.parse(carritoGuardado);
        if (Array.isArray(carritoParseado)) {
          setCarrito(carritoParseado);
        }
      } catch (error) {
        console.error("Error al parsear carrito:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <Router>
      {/* BARRA SUPERIOR TIPO NIKE */}
      <div className="barra-superior">
        <div className="barra-links">
          <a href="#">Buscar una tienda</a>
          <a href="#">Ayuda</a>
          <a href="#">Únete</a>
          <a href="#">Iniciar sesión</a>
        </div>
      </div>

      {/* HEADER */}
      <Header carrito={carrito} setMostrarCarrito={setMostrarCarrito} />

      <main className="contenido-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/futbol11"
            element={
              <>
                <Listado
                  titulo={tituloCategoria.futbol11}
                  productos={categorias.futbol11}
                  onSeleccionar={setProductoSeleccionado}
                  agregarAlCarrito={agregarAlCarrito}
                />
                <DetalleProducto
                  producto={productoSeleccionado}
                  onCerrar={() => setProductoSeleccionado(null)}
                  agregarAlCarrito={agregarAlCarrito}
                />
              </>
            }
          />
          <Route
            path="/futbol5"
            element={
              <>
                <Listado
                  titulo={tituloCategoria.futbol5}
                  productos={categorias.futbol5}
                  onSeleccionar={setProductoSeleccionado}
                  agregarAlCarrito={agregarAlCarrito}
                />
                <DetalleProducto
                  producto={productoSeleccionado}
                  onCerrar={() => setProductoSeleccionado(null)}
                  agregarAlCarrito={agregarAlCarrito}
                />
              </>
            }
          />
          <Route
            path="/futsal"
            element={
              <>
                <Listado
                  titulo={tituloCategoria.futsal}
                  productos={categorias.futsal}
                  onSeleccionar={setProductoSeleccionado}
                  agregarAlCarrito={agregarAlCarrito}
                />
                <DetalleProducto
                  producto={productoSeleccionado}
                  onCerrar={() => setProductoSeleccionado(null)}
                  agregarAlCarrito={agregarAlCarrito}
                />
              </>
            }
          />
        </Routes>
      </main>

      {/* CARRITO MODAL */}
      {mostrarCarrito && (
        <Carrito
          carrito={carrito}
          onCerrar={() => setMostrarCarrito(false)}
          onEliminar={quitarDelCarrito}
          onVaciar={vaciarCarrito}
          onFinalizar={finalizarCompra}
        />
      )}

      <Footer />
    </Router>
  );
}

export default App;
