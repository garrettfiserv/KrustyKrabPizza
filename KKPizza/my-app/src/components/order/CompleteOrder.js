import axios from "axios";
import { useEffect, useState } from "react";

// const orderDetails = {
//   orderId: 0,
//   phoneNumber: "5555555555",
//   timestamp: "tba",
//   orderTotal: 120.55,
//   isComplete: false,
// };

export default function CompleteOrder() {
  const [customerOrders, setCustomerOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);

  // useEffect(() => {
  //   const getCustomerOrders = async () => {
  //     const customerOrderResponse = await axios.get(
  //       "http://localhost:8080/customerOrder/getAll"
  //     );
  //     const custOrders = customerOrderResponse?.data;
  //     console.log("Customer Orders:", custOrders);
  //   };

  //   getCustomerOrders();
  // }, []);

  // useEffect(() => {
  //   const getOrderDetails = async () => {
  //     const orderDetailsResponse = await axios.get(
  //       "http://localhost:8080/orderDetail/getAll"
  //     );
  //     const orderDetails = orderDetailsResponse?.data;
  //     console.log("Order Details:", orderDetails);
  //   };

  //   getOrderDetails();
  // }, []);

  //   useEffect(() => {
  //     const getCustomerOrder = async () => {
  //       const customerOrderResponse = await axios.get(
  //         `http://localhost:8080/customerOrder/${}`);
  //       const custOrders = customerOrderResponse?.data;
  //       console.log("Customer Orders:", custOrders);
  //     };

  //     getCustomerOrders();
  //   }, []);

  return (
    <section className="form-wrapper">
      <h3>Order Complete!</h3>
      <h4>Thank you for choosing the Krusty Krab</h4>
      {/* <div>Order #{orderDetails.orderId}</div>
      <div>Time Placed: {orderDetails.timestamp}</div>
      <div>Total: {orderDetails.orderTotal}</div>
      <div>Phone: {orderDetails.phoneNumber}</div> */}
    </section>
  );
}
