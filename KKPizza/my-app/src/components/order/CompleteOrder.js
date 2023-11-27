import axios from "axios";
import { useEffect } from "react";

const orderDetails = {
  orderId: 0,
  phoneNumber: "5555555555",
  timestamp: "tba",
  orderTotal: 120.55,
  isComplete: false,
};

export default function CompleteOrder() {
  useEffect(() => {
    const getCustomerOrders = async () => {
      const customerOrderResponse = await axios.get(
        "http://localhost:8080/customerOrder/getAll"
      );
      const custOrders = customerOrderResponse?.data;
      console.log("Customer Orders:", custOrders);
    };

    getCustomerOrders();
  }, []);

  useEffect(() => {
    const getOrderDetails = async () => {
      const orderDetailsResponse = await axios.get(
        "http://localhost:8080/orderDetail/getAll"
      );
      const orderDetails = orderDetailsResponse?.data;
      console.log("Order Details:", orderDetails);
    };

    getOrderDetails();
  }, []);

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
