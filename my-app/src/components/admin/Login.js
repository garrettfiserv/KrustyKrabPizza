import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // include error handling

    console.log("Login Successful");
    // re-route to Menu page
    return navigate("/admin/home");
  };

  return (
    <>
      <h1>Admin Login Page</h1>
      <main>
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
        </div>
      </main>
    </>
  );
}
