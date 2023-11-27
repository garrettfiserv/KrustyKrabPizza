import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/AuthProvider";

export default function Navbar() {
  const { logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      <div className="links">
        <Link to="/new-order/start">Start Order</Link>
        <Link to="/admin/login">Admin Portal</Link>
        <button type="submit" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </div>
  );
}
