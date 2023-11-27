import { Link, useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem.js";
import { useCartContext } from "../../context/CartProvider.js";

export default function MenuItems() {
  const { products } = useCartContext();
  const navigate = useNavigate();

  return (
    <section className="page-center">
      <h2>Menu</h2>
      <Link to="/new-order/customer-info">Return</Link>
      <div className="list-center">
        {products.map((product) => (
          <MenuItem key={product.productnumber} product={product} />
        ))}
      </div>
      <button onClick={() => navigate("/new-order/cart")}>
        Continue To Cart
      </button>
    </section>
  );
}
