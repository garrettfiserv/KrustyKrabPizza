import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CustomerInfo() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [custState, setCustState] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // include error handling

    console.log("Customer Information Successful");
    // re-route to Menu page
    return navigate("/new-order/menu");
  };

  return (
    <>
      <h1>Customer Info Page</h1>
      <main>
        <Link to="/new-order/start">Return</Link>
        <div>
          <form onSubmit={handleSubmit} className="form-container">
            <input
              required
              name="name"
              placeholder="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
            <input
              required
              name="phone"
              placeholder="Phone"
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
      </main>
    </>
  );
}
