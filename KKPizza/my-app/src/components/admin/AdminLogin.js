import React from "react";
import { useUserContext } from "../../context/AuthProvider";
import AdminHome from "./AdminHome";

export default function AdminLogin() {
  const { user } = useUserContext();
  console.log(user);
  return (
    <section>
      <h1>Administrative Login</h1>
      {user.isadmin ? (
        <AdminHome />
      ) : (
        <div>
          <h3>Unauthorized Access</h3>
        </div>
      )}
    </section>
  );
}
