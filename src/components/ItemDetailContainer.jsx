import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { useCart } from "../context/CartContext";

import ak47redline from "../assets/ak47redline.png";
import awpasssimov from "../assets/awpasssimov.png";
import glockfade from "../assets/glockfade.png";
import desertblaze from "../assets/desertblaze.png";
import m4a4howl from "../assets/m4a4howl.png";

const localImages = {
  "AK-47 | Redline": ak47redline,
  "AWP | Asiimov": awpasssimov,
  "Glock-18 | Fade": glockfade,
  "Desert Eagle | Blaze": desertblaze,
  "M4A4 | Howl": m4a4howl,
};

const productos = [
  {
    id: "1",
    nombre: "AK-47 | Redline",
    categoria: "rifles",
    precio: 120,
    imagen: ak47redline,
    descripcion: "Skin de rifle popular y elegante.",
  },
  {
    id: "2",
    nombre: "AWP | Asiimov",
    categoria: "snipers",
    precio: 300,
    imagen: awpasssimov,
    descripcion: "Sniper de alta gama con estilo sci-fi.",
  },
  {
    id: "3",
    nombre: "Glock-18 | Fade",
    categoria: "pistolas",
    precio: 85,
    imagen: glockfade,
    descripcion: "Skin de pistola con degradado.",
  },
  {
    id: "4",
    nombre: "Desert Eagle | Blaze",
    categoria: "pistolas",
    precio: 80,
    imagen: desertblaze,
    descripcion: "Skin de pistola con llamas.",
  },
  {
    id: "5",
    nombre: "M4A4 | Howl",
    categoria: "rifles",
    precio: 1800,
    imagen: m4a4howl,
    descripcion: "Skin de rifle con diseño howl.",
  },
];
const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { products, loading } = useProducts();
  const { addToCart } = useCart();

  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!loading) {
      const product = products.find((p) => p.id === itemId);
      setItem(product || null);
    }
  }, [loading, itemId, products]);

  if (loading) return <p style={{ color: "white", textAlign: "center" }}>Cargando producto...</p>;
  if (!item) return <p style={{ color: "white", textAlign: "center" }}>Producto no encontrado.</p>;

  return (
    <div className="item-detail" style={{ color: "white", padding: "20px" }}>
      <h2>{item.name}</h2>
      <img
        src={localImages[item.name] || item.image}
        alt={item.name}
        style={{ width: "300px", borderRadius: "10px", marginBottom: "15px" }}
      />
      <p>{item.description || "Sin descripción"}</p>
      <p>
        <strong>Precio:</strong> ${item.price}
      </p>
      <button onClick={() => addToCart(item)} style={{ marginTop: "10px", padding: "10px 20px", cursor: "pointer" }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;


