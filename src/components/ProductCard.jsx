// src/components/ProductCard.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card" style={{
      background: "#151515",
      padding: 12,
      borderRadius: 8,
      textAlign: "center"
    }}>
      <img src={product.image || "/placeholder.png"} alt={product.name} style={{width: "100%", height: 140, objectFit: "cover", borderRadius: 6}}/>
      <h4 style={{margin: "10px 0 6px"}}>{product.name}</h4>
      <p style={{margin: 0}}>${product.price}</p>
      <button
        style={{marginTop: 10, background: "#00ffcc", border: "none", padding: "8px 12px", borderRadius: 6, cursor: "pointer"}}
        onClick={() => addToCart(product, 1)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
