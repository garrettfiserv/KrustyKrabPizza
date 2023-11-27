import { useCartContext } from "../../context/CartProvider";

export default function CartItem({ product }) {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useCartContext();

  return (
    <>
      <div>{product.description}</div>
      <div>{product.price}</div>
      <div>
        <button onClick={() => removeFromCart(product.productnumber)}>
          {" "}
          -{" "}
        </button>
        <input
          value={cartItems[product.productnumber]}
          onChange={(e) =>
            updateCartItemCount(Number(e.target.value), product.productnumber)
          }
        />
        <button onClick={() => addToCart(product.productnumber)}> + </button>
      </div>
    </>
  );
}
