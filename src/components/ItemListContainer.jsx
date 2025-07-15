import { useEffect, useState } from 'react'; 
import { useParams, Link } from 'react-router-dom';

import ak47redline from '../assets/ak47redline.png';
import awpasssimov from '../assets/awpasssimov.png';
import glockfade from '../assets/glockfade.png';

const productos = [
  { id: '1', nombre: 'AK-47 | Redline', categoria: 'rifles', precio: 120, imagen: ak47redline },
  { id: '2', nombre: 'AWP | Asiimov', categoria: 'snipers', precio: 300, imagen: awpasssimov },
  { id: '3', nombre: 'Glock-18 | Fade', categoria: 'pistolas', precio: 85, imagen: glockfade }
];

export const ItemListContainer = ({ greeting }) => {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProductos = new Promise((resolve) => {
      setTimeout(() => {
        if (categoriaId) {
          resolve(productos.filter(p => p.categoria === categoriaId));
        } else {
          resolve(productos);
        }
      }, 500);
    });

    fetchProductos.then(res => setItems(res));
  }, [categoriaId]);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="item-grid">
        {items.map(prod => (
          <div key={prod.id} className="item-card">
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>${prod.precio}</p>
            <Link to={`/item/${prod.id}`}>
              <button>Ver detalle</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

