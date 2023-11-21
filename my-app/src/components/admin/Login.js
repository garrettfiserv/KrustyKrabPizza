import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminHome from "./AdminHome";
import AuthContext from "../../context/AuthProvider";
import axios from "axios";

export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const [employeeId, setEmployeeId] = useState();
  const [password, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // include error handling

    try {
      const response = await axios.post(
        "http://localhost:8080/employee/add",
        JSON.stringify(
          { employeeID: employeeId, password: password },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
      );
      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data.accessToken;
      setAuth({ employeeId, password, accessToken });
      setIsLoggedIn(true);

      console.log("Login Successful");
      // re-route to Menu page
      return navigate("/admin/home");
    } catch (err) {
      if (!err?.response) {
        setErrorMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrorMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized Credentials");
      } else {
        setErrorMsg("Login Failed");
      }
    }
  };

  return (
    <>
      {isLoggedIn ? null : (
        <section>
          <h1>Administrative Login</h1>
          <Link to="/">Return</Link>
          <div>
            <form onSubmit={handleSubmit} className="form-container">
              <input
                required
                name="employeeId"
                placeholder="Employee ID"
                type="text"
                onChange={(e) => setEmployeeId(e.target.value)}
                className="form-input"
              />
              <input
                required
                name="password"
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />

              <button>Submit</button>
            </form>
            <div>{errorMsg ? errorMsg : null}</div>
          </div>
        </section>
      )}
    </>
  );
}
