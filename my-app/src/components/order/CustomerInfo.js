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
  const [customers, setCustomers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/customer/getAll").then((response) => {
      setCustomers(response.data);
    });
  }, []);

  console.log(customers);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/customer/add", {
        PHONENUMBER: phone,
        name: name,
        address: address,
        city: city,
        state: custState,
        zip: zip,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Axios Post Error In CustomerInfo Componenet: ", error);
      });

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
              placeholder="Full Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
            <input
              required
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
      </main>
    </>
  );
}
