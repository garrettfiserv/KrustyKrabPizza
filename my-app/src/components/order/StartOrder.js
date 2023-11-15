import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StartOrder() {
  const [phone, setPhone] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // include error handling

    console.log("Start Order Successful");
    // re-route to Menu page
    return navigate("/new-order/customer-info");
  };

  return (
    <>
      <h1>Start Order Page</h1>
      <main>
        <Link to="/">Return</Link>
        <div>
          <form onSubmit={handleSubmit} className="form-container">
            <input
              required
              name="phone"
              placeholder="Phone Number"
              type="phone"
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
            />

            <button>Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}
