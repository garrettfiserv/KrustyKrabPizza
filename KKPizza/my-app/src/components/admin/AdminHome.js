import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminHome() {
  return (
    <section>
      <h3 className="page-center">Administrative Home</h3>
      <div className="admin-wrapper">
        <Link to="/admin/products" className="admin-item">
          Products
        </Link>
        <Link to="/admin/employees" className="admin-item">
          Employees
        </Link>
        <Link to="/admin/customers" className="admin-item">
          Customers
        </Link>
      </div>
    </section>
  );
}
