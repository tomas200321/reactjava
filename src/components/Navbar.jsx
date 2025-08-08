import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">CS2 Shop</div>
      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/simulador">Simulador</Link>
        <Link to="/carrito">
          Carrito {totalQuantity > 0 && `(${totalQuantity})`}
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;



