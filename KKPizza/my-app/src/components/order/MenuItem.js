import { useContext } from "react";
import CartContext from "../../context/CartProvider";

export default function MenuItem(props) {
  const { id, item, price } = props.data;
  const { addToCart, cartItems } = useContext(CartContext);
  const cartItemCount = cartItems[id];

  return (
    <>
      <div>
        <div>
          {item}
          <div>${price}</div>
        </div>
      </div>
      <button onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </>
  );
}
