import { useCartContext } from "../../context/CartProvider";

export default function MenuItem({ product }) {
  const { addToCart, cartItems } = useCartContext();
  const cartItemCount = cartItems[product.productnumber];

  return (
    <section className="wrapper">
      <div className="wrapper-item">
        Item: {product.description}
        <div className="wrapper-item">
          Price: ${(Math.round(product.price * 100) / 100).toFixed(2)}
        </div>
      </div>
      <button
        onClick={() => addToCart(product.productnumber)}
        className="wrapper-item"
      >
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </section>
  );
}
