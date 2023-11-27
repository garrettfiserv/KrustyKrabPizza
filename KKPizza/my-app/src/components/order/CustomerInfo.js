import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useUserContext } from "../../context/AuthProvider";

export default function CustomerInfo() {
  const { user } = useUserContext();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [custState, setCustState] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const customer = {
      phoneNumber: phone,
      name: name,
      address: address,
      city: city,
      state: custState,
      zip: zip,
    };

    await axios
      .post("http://localhost:8080/customer/add", customer)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Axios Post Error In CustomerInfo Componenet: ", error);
      });

    // Create customerOrder
    const customerOrder = {
      employeeID: user.employeeID,
      phoneNumber: phone,
      orderTotal: 0,
      isComplete: false,
      // orderdate: new Date().getDate(),
      // ordertime: new Date().getTime(),
    };

    const customerOrderResponse = await axios.post(
      "http://localhost:8080/customerOrder/add",
      customerOrder
    );

    const createdOrder = customerOrderResponse?.data;
    console.log("Customer Order Created:", createdOrder);
    console.log("Customer Information Successful");
    localStorage.setItem("customer", JSON.stringify(customer));
    return navigate("/new-order/menu");
  };

  return (
    <section>
      <Link to="/new-order/start">Return</Link>
      <div>
        <h3 className="page-center">Customer Information</h3>
        <form onSubmit={handleSubmit} className="form-wrapper">
          <input
            required
            name="name"
            placeholder="Full Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
          />
          <input
            required
            name="address"
            placeholder="Address"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            className="form-input"
          />
          <input
            required
            name="city"
            placeholder="City"
            type="text"
            onChange={(e) => setCity(e.target.value)}
            className="form-input"
          />
          <input
            required
            name="zip"
            placeholder="Zip Code"
            type="text"
            onChange={(e) => setZip(e.target.value)}
            className="form-input"
          />
          <input
            required
            name="state"
            placeholder="State"
            type="text"
            onChange={(e) => setCustState(e.target.value)}
            className="form-input"
          />
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}
