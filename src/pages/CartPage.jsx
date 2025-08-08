// src/pages/CartPage.jsx
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

export const CartPage = () => {
  const { cart, totalPrice, clearCart, increment, decrement, removeFromCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  const createOrder = async () => {
    if (!buyer.name || !buyer.email) {
      Swal.fire("Completa los datos del comprador", "", "warning");
      return;
    }
    setLoading(true);
    try {
      const order = {
        buyer,
        items: cart,
        total: totalPrice,
        createdAt: serverTimestamp(),
      };
      const docRef = await addDoc(collection(db, "orders"), order);
      Swal.fire("Compra realizada", `ID: ${docRef.id}`, "success");
      clearCart();
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) return <div style={{padding:20}}>El carrito está vacío</div>;

  return (
    <div style={{padding: 20}}>
      <h2>Carrito</h2>
      <div style={{display: "grid", gap: 12, marginTop: 12}}>
        {cart.map((item) => (
          <div key={item.id} style={{display:"flex", gap:12, alignItems:"center", background:"#181818", padding:12, borderRadius:8}}>
            <div style={{flex:1}}>
              <b>{item.name}</b>
              <div>${item.price} x {item.quantity} = ${ (item.price * item.quantity).toFixed(2) }</div>
            </div>
            <div>
              <button onClick={() => increment(item.id)}>+</button>
              <button onClick={() => decrement(item.id)} style={{marginLeft:6}}>-</button>
              <button onClick={() => removeFromCart(item.id)} style={{marginLeft:6}}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:16}}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>

        <div style={{marginTop:12, display:"flex", gap:8, flexDirection:"column", maxWidth:420}}>
          <input placeholder="Nombre" value={buyer.name} onChange={(e)=>setBuyer({...buyer, name:e.target.value})} />
          <input placeholder="Email" value={buyer.email} onChange={(e)=>setBuyer({...buyer, email:e.target.value})} />
          <button onClick={createOrder} disabled={loading} style={{background:"#00ffcc", padding:8, border:"none", cursor:"pointer"}}>
            {loading ? "Procesando..." : "Finalizar compra"}
          </button>
        </div>
      </div>
    </div>
  );
};
