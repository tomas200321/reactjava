import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ak47redline from '../assets/ak47redline.png';
import awpasssimov from '../assets/awpasssimov.png';
import glockfade from '../assets/glockfade.png';


const productos = [
  {
    id: '1',
    nombre: 'AK-47 | Redline',
    categoria: 'rifles',
    precio: 120,
    imagen: ak47redline,
    descripcion: 'Skin de rifle popular y elegante.'
  },
  {
    id: '2',
    nombre: 'AWP | Asiimov',
    categoria: 'snipers',
    precio: 300,
    imagen: awpasssimov,
    descripcion: 'Sniper de alta gama con estilo sci-fi.'
  },
  {
    id: '3',
    nombre: 'Glock-18 | Fade',
    categoria: 'pistolas',
    precio: 85,
    imagen: glockfade,
    descripcion: 'Skin de pistola con degradado.'
  }
];

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find(p => p.id === itemId));
      }, 500);
    });

    fetchItem.then(setItem);
  }, [itemId]);

  if (!item) return <p>Cargando producto...</p>;

  return (
    <div className="item-detail">
      <h2>{item.nombre}</h2>
      <img src={item.imagen} alt={item.nombre} style={{ width: '300px', borderRadius: '10px' }} />
      <p>{item.descripcion}</p>
      <p><strong>Precio:</strong> ${item.precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};
