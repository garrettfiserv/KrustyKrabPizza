export default function Product({ product }) {
  return (
    <section className="wrapper">
      <div className="wrapper-item">Product #:{product.productnumber}</div>
      <div className="wrapper-item">Description:{product.description}</div>
      <div className="wrapper-item">
        Price: ${(Math.round(product.price * 100) / 100).toFixed(2)}
      </div>
    </section>
  );
}
