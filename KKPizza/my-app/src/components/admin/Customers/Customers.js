import { useState, useEffect } from "react";
import axios from "axios";
import Customer from "./Customer";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getAllCustomers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/customer/getAll"
        );
        setCustomers(response?.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    getAllCustomers();
  }, []);

  console.log(customers);

  return (
    <section>
      <h3>Customers Page</h3>
      <div>
        {customers.map((customer, i) => (
          <Customer key={i} customer={customer} />
        ))}
      </div>
    </section>
  );
}
