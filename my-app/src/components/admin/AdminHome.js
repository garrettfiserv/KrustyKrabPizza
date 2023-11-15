import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminHome() {
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
