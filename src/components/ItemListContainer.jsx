import React from "react";
import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";

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

const ItemListContainer = ({ greeting }) => {
  const { products, loading } = useProducts();

  if (loading) {
    return <p style={{ color: "white", textAlign: "center" }}>Cargando productos...</p>;
  }

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="item-grid">
        {products.map((prod) => (
          <div key={prod.id} className="item-card">
            <img src={localImages[prod.name] || prod.image} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>${prod.price}</p>
            <Link to={`/item/${prod.id}`}>
              <button>Ver detalle</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;







