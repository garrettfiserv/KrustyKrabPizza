import { Link } from "react-router-dom";

export default function CustomerOrder({ order }) {
  return (
    <section>
      <h2>Order ID: {order.orderID}</h2>
      {/* <div>Timestamp: {order.timestamp}</div> */}
      <div>Phone Number: {order.phonenumber}</div>
      <div>Total: ${(Math.round(order.ordertotal * 100) / 100).toFixed(2)}</div>
      <div>Employee: {order.employeeID}</div>
    </section>
  );
}
