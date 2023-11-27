import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({ loader }) {
  const [employeeID, setEmployeeId] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    setErrorMsg("");
  }, [employeeID, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8080/employee/getEmployeeById/${Number(employeeID)}`,
        {
          params: {
            employeeID: Number(employeeID),
            password: pwd,
          },
        }
      );

      const employee = {
        employeeID: response.data.employeeID,
        isadmin: response.data.isadmin,
        name: response.data.name,
        phonenumber: response.data.phonenumber,
        title: response.data.title,
      };

      if (employee) {
        loader(employee);
        navigate("/new-order/start");
      } else {
        loader(null);
      }
    } catch (err) {
      if (!err?.response) {
        setErrorMsg("No Server Response");
      } else if (err.response?.status === 401) {
      } else {
        setErrorMsg("Login Failed.");
      }
    }
  };

  return (
    <section className="page-center">
      <h1>Krusty Krab Pizza</h1>
      <h2>Employee Login</h2>
      <div>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            required
            type="text"
            id="employeeId"
            placeholder="Employee ID"
            onChange={(e) => setEmployeeId(e.target.value)}
            value={employeeID}
            className="form-input"
          />
          <input
            required
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            className="form-input"
          />
          <button>Submit</button>
        </form>
        <div>{errorMsg ? errorMsg : null}</div>
      </div>
    </section>
  );
}
