import React, { useState } from 'react';

export default function Listado({ titulo, productos, onSeleccionar, agregarAlCarrito }) {
  const [marcaSeleccionada, setMarcaSeleccionada] = useState('Todas');

  const productosFiltrados = productos.filter((producto) => {
    if (marcaSeleccionada === 'Todas') return true;
    return producto.nombre.toLowerCase().includes(marcaSeleccionada.toLowerCase());
  });

  return (
    <section className="catalogo">
      <h2>{titulo}</h2>

      <div className="filtro-marcas">
  <button onClick={() => setMarcaSeleccionada('Todas')}>Todas</button>
  <button onClick={() => setMarcaSeleccionada('Nike')}>Nike</button>
  <button onClick={() => setMarcaSeleccionada('Adidas')}>Adidas</button>
  <button onClick={() => setMarcaSeleccionada('Puma')}>Puma</button>
</div>


      <div className="grid">
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
           <div className="botones-producto">
          <button onClick={() => onSeleccionar(producto)}>Ver más</button>
          <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </div>

          </div>
        ))}
      </div>
    </section>
  );
}

