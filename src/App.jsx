import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda de skins de CS2" />} />
          <Route path="/simulador" element={<h1>Simulador</h1>} />
          <Route path="/carrito" element={<h1>Carrito</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

