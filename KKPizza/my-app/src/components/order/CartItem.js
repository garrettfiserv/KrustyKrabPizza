import { useContext } from "react";
import CartContext from "../../context/CartProvider";

export default function CartItem(props) {
  const { id, item, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(CartContext);
  return (
    <>
      <div>{item}</div>
      <div>{price}</div>
      <div>
        <button onClick={() => removeFromCart(id)}> - </button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button onClick={() => addToCart(id)}> + </button>
      </div>
    </>
  );
}
