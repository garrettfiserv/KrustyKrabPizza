import Product from "./Product";
import { useCartContext } from "../../../context/CartProvider";

export default function Products() {
  const { products } = useCartContext();

  return (
    <section>
      <h2 className="page-center">Menu</h2>
      <div>
        {products.map((product) => (
          <Product key={product.productnumber} product={product} />
        ))}
      </div>
    </section>
  );
}
