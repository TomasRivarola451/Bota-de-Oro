import React from 'react';

export default function DetalleProducto({ producto, onCerrar, agregarAlCarrito }) {
  if (!producto) return null;

  return (
    <div className="modal" onClick={onCerrar}>
      <div className="modal-contenido" onClick={e => e.stopPropagation()}>
        <button className="cerrar" onClick={onCerrar}>X</button>

        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'contain',
            borderRadius: '10px',
            backgroundColor: 'white',
            marginBottom: '1rem',
          }}
        />

        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <div className="detalle-info">
          <p>💰 <strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>
          <p>📏 <strong>Talles disponibles:</strong> {producto.talles.join(', ')}</p>
          <p>💳 <strong>Métodos de pago:</strong> {producto.metodosPago.join(' / ')}</p>
        </div>

        {/* Botón para agregar al carrito */}
        <button 
          onClick={() => agregarAlCarrito(producto)} 
          className="btn-carrito"
        >
          🛒 Agregar al carrito
        </button>
      </div>
    </div>
  );
}
