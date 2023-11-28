import { useEffect, useState } from "react";
import axios from "axios";
import OrderDetails from "./OrderDetails";

export default function Order({ orders, customer, customerOrder }) {
  const [employee, setEmployee] = useState({});
  const [isDroppedDown, setIsDroppedDown] = useState(false);
  //   console.log("Order:", orders);
  //   console.log("Customer:", customer);
  //   console.log("CustomerOrder:", customerOrder);

  useEffect(() => {
    const getEmployee = async () => {
      const response = await axios.get(
        `http://localhost:8080/employee/getEmployeeById/${customerOrder.employeeID}`
      );

      setEmployee(response?.data);
    };

    getEmployee();
  }, [customerOrder.employeeID]);

  const handleButtonClick = () => {
    isDroppedDown ? setIsDroppedDown(false) : setIsDroppedDown(true);
  };

  //   console.log(employee);

  return (
    <section className="wrapper">
      <div>Order #: {customerOrder.orderID}</div>
      <div>Customer Name: {customer.name}</div>
      <div>Customer Phone: {customer.phoneNumber}</div>
      <div>
        Total Charged: $
        {(Math.round(customerOrder.ordertotal * 100) / 100).toFixed(2)}
      </div>
      <div>
        Employee ID, Name: {employee.employeeID}, {employee.name}
      </div>
      <button onClick={handleButtonClick}>Order Details</button>
      {isDroppedDown && (
        <OrderDetails
          orders={orders}
          customer={customer}
          customerOrder={customerOrder}
        />
      )}
    </section>
  );
}
