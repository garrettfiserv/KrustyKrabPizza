import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminHome() {
  {
    /* TODO for home page
1. call getAllEmployees
2. call getAllOrders
3. call getAllMenuItems
*/
  }
  return (
    <>
      <h1>Admin Home Page</h1>
      <main>
        <Link to="/admin/login">Return</Link>
        <div>Home stuff</div>
      </main>
    </>
  );
}
