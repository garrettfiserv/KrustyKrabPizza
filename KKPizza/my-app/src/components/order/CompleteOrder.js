const orderDetails = {
  orderId: 0,
  phoneNumber: "5555555555",
  timestamp: "tba",
  orderTotal: 120.55,
  isComplete: false,
};

export default function CompleteOrder() {
  return (
    <main>
      <h1>Order Complete!</h1>
      <div>Order #{orderDetails.orderId}</div>
      <div>Time Placed: {orderDetails.timestamp}</div>
      <div>Total: {orderDetails.orderTotal}</div>
      <div>Phone: {orderDetails.phoneNumber}</div>
    </main>
  );
}
