import '../App.css';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">CS2 Shop</div>
      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/simulador">Simulador</Link>
        <Link to="/carrito">Carrito</Link>
        <CartWidget />
      </nav>
    </header>
  );
};