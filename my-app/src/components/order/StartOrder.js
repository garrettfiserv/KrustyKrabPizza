import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const deliveryZipCodes = [55501, 55502, 55503, 5550];

export default function StartOrder() {
  const [zip, setZip] = useState("");
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let zipToNum = Number(zip);

    if (deliveryZipCodes.includes(zipToNum)) {
      console.log("Start Order Successful");
      // re-route to Menu page
      return navigate("/new-order/customer-info");
    } else {
      setError("Invalid zip code");
    }
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
              name="zip"
              placeholder="Zip Code"
              type="zip"
              onChange={(e) => setZip(e.target.value)}
              className="form-input"
            />
            <button>Submit</button>
          </form>
          <div>{error ? <div>{error}</div> : null}</div>
        </div>

        {/* DO NOT DELETE. WILL POTENTIALLY USE CODE IN FUTURE FOR CHECKING TO SEE IF A CUSTOMER ALREADY IS SAVED IN THE DB. IF THEY ARE, THEN WE CAN CHECK WITH THEIR PHONE NUMBER AND GET ALL OF THEIR INFO AND JUST CONFIRM THEIR INFO IS CORRECT VERSUS ASKING THEM TO REPEAT ALL OF THEIR INFO EVERY TIME THEY ORDER */}
        {/* <div>
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
        </div> */}
      </main>
    </>
  );
}
