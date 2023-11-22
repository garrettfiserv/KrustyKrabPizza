import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/new-order/cart">Cart</Link>
        <Link to="/admin/login">Admin Login</Link>
      </div>
    </div>
  );
}
