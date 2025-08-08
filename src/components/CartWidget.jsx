import { useCart } from "../context/CartContext";

export const CartWidget = () => {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      🛒 <span>{totalQuantity}</span>
    </div>
  );
};
