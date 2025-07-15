import '../App.css';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">CS2 Shop</div>
      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/categoria/rifles">Rifles</Link>
        <Link to="/categoria/snipers">Snipers</Link>
        <Link to="/categoria/pistolas">Pistolas</Link>
        <CartWidget />
      </nav>
    </header>
  );
};
