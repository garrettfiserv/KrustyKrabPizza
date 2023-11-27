import { useState, useEffect } from "react";
import axios from "axios";
import CustomerOrder from "./CustomerOrder";

export default function CustomerOrders() {
  const [customerOrders, setCustomerOrders] = useState([]);

  useEffect(() => {
    const getAllCustomerOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/customerOrder/getAll"
        );
        setCustomerOrders(response?.data);
      } catch (error) {
        console.error("Error fetching customer orders:", error);
      }
    };
    getAllCustomerOrders();
  }, []);

  console.log(customerOrders);

  return (
    <section>
      <h1>Customer Orders Page</h1>
      <div>
        {customerOrders.map((order, i) => {
          if (order.orderID !== 0) {
            return <CustomerOrder key={i} order={order} />;
          }
        })}
      </div>
    </section>
  );
}
