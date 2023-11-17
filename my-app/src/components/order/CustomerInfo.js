import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CustomerInfo() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [custState, setCustState] = useState("");
  const [error, setError] = useState(null);
  const [customers, setCustomers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/new-order/customer")
      .then((response) => response.json())
      .then((result) => {
        setCustomers(result);
      })
      .catch((error) => {
        console.error("Axios Error: CustomerInfo Componenet: ", error);
        setError(error);
      });
  }, []);

  console.log(customers);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // include error handling

    console.log("Customer Information Successful");
    // re-route to Menu page
    return navigate("/new-order/menu");
  };

  return (
    <>
      <main>
        <Link to="/new-order/start">Return</Link>
        <div>
          <form onSubmit={handleSubmit} className="form-container">
            <input
              required
              name="name"
              placeholder={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
            <input
              required
              name="phone"
              placeholder={phone}
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
          <div>
            {customers.map((customer) => (
              <div key={customer.id}>
                <div>ID: {customer.id}</div>
                <div>Name: {customer.name}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
