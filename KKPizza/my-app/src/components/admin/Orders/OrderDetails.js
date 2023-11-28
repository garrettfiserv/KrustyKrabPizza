import { useCartContext } from "../../../context/CartProvider";

export default function OrderDetails({ orders, customer, customerOrder }) {
  const { products } = useCartContext();

  const combineSameOrderIDs = orders.filter((order) => {
    const findProducts = products.find(
      (product) => product.productnumber === order.productNumber
    );

    return findProducts && order.orderID === customerOrder.orderID;
  });

  console.log("Combined Products: ", combineSameOrderIDs);

  console.log(orders);
  return (
    <section className="order-details-wrapper">
      <div>
        {combineSameOrderIDs.map((order) =>
          products.map((product, j) =>
            product.productnumber === order.productNumber ? (
              <div key={j} className="order-details-item">
                <div>Product Name: {product.description}</div>
                <div>Quantity: {order.quantity}</div>
                <div>
                  Price Per Item: $
                  {(Math.round(product.price * 100) / 100).toFixed(2)}
                </div>
                <div>
                  Total: $
                  {(Math.round(order.priceCharged * 100) / 100).toFixed(2)}
                </div>
              </div>
            ) : null
          )
        )}
      </div>
    </section>
  );
}
