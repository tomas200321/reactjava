import { useState } from "react";
import { useCart } from "../context/CartContext";
import './Checkout.css';

const Checkout = () => {
  const { cart, saveOrder, clearCart } = useCart();

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let errs = {};
    if (!buyer.name.trim()) errs.name = "El nombre es obligatorio";
    if (!buyer.email.trim()) {
      errs.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(buyer.email)) {
      errs.email = "Email inválido";
    }
    if (!buyer.phone.trim()) errs.phone = "El teléfono es obligatorio";
    return errs;
  };

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      try {
        setLoading(true);
        const id = await saveOrder(buyer);
        setOrderId(id);
        clearCart();
      } catch (error) {
        alert("Hubo un error al procesar la compra. Intente más tarde.");
      } finally {
        setLoading(false);
      }
    }
  };

  if (orderId) {
    return (
      <div className="checkout-container">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos antes de finalizar la compra.</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      <form className="checkout-form" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Nombre completo</label>
          <input
            id="name"
            name="name"
            type="text"
            value={buyer.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            value={buyer.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={buyer.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>

        <div className="checkout-buttons">
          <button type="submit" disabled={loading}>
            {loading ? "Procesando..." : "Comprar"}
          </button>
          <button
            type="button"
            onClick={() => window.history.back()}
            disabled={loading}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
