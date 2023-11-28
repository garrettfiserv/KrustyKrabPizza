import { useState, useEffect } from "react";
import Order from "./Order";
import axios from "axios";

export default function Products() {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [customerOrders, setCustomerOrders] = useState([]);

  useEffect(() => {
    const getAllOrders = async () => {
      const response = await axios.get(
        "http://localhost:8080/orderDetail/getAll"
      );
      setOrders(response?.data);
    };

    getAllOrders();
  }, []);

  useEffect(() => {
    const getAllCustomers = async () => {
      const response = await axios.get("http://localhost:8080/customer/getAll");
      setCustomers(response?.data);
    };

    getAllCustomers();
  }, []);

  useEffect(() => {
    const getAllCustomerOrders = async () => {
      const response = await axios.get(
        "http://localhost:8080/customerOrder/getAll"
      );
      setCustomerOrders(response?.data);
    };

    getAllCustomerOrders();
  }, []);

  const combineSameOrderIDs = customerOrders.filter((co) => {
    const findOrders = orders.find((o) => o.orderID === co.orderID);

    return findOrders;
  });

  return (
    <section>
      <h2 className="page-center">Order History</h2>
      <div>
        {combineSameOrderIDs.map((co, i) =>
          customers.map((cust) =>
            co.phonenumber === cust.phoneNumber ? (
              <Order
                key={i}
                orders={orders}
                customer={cust}
                customerOrder={co}
              />
            ) : null
          )
        )}
      </div>
    </section>
  );
}
