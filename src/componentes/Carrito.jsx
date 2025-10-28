import React from "react";
import "./Carrito.css";

export default function Carrito({ carrito, onCerrar, onEliminar, onVaciar, onFinalizar }) {
  return (
    <div className="carrito-overlay" onClick={onCerrar}>
      <div className="carrito-modal" onClick={(e) => e.stopPropagation()}>
        <button className="carrito-cerrar" onClick={onCerrar}>
          ✕
        </button>
        <h2 className="carrito-titulo">🛒 Tu Carrito</h2>

        {carrito.length === 0 ? (
          <p className="carrito-vacio">Tu carrito está vacío</p>
        ) : (
          <>
            <ul className="carrito-lista">
              {carrito.map((producto) => (
                <li key={producto.id} className="carrito-item">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="carrito-img"
                  />
                  <div className="carrito-detalles">
                    <h4>{producto.nombre}</h4>
                    <p>
                      {producto.cantidad} x ${producto.precio.toLocaleString()}
                    </p>
                    <p className="subtotal">
                      Subtotal: ${(producto.precio * producto.cantidad).toLocaleString()}
                    </p>
                  </div>
                  <button
                    className="btn-quitar"
                    onClick={() => onEliminar(producto.id)}
                  >
                    Quitar uno
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="carrito-total">
              Total: $
              {carrito.reduce(
                (acc, item) => acc + item.precio * item.cantidad,
                0
              ).toLocaleString()}
            </h3>

            <div className="carrito-acciones">
              <button className="btn-vaciar" onClick={onVaciar}>
                Vaciar carrito
              </button>
              <button className="btn-finalizar" onClick={onFinalizar}>
                Finalizar compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
