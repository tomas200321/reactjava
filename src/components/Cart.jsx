import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-total">Total: ${totalPrice.toFixed(2)}</div>
      <div className="cart-actions">
        <button onClick={() => navigate("/checkout")}>Proceder al pago</button>
        <button onClick={clearCart}>Vaciar carrito</button>
      </div>
    </div>
  );
};

export default Cart;


