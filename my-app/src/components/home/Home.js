import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>
        <div>KKP Home Page!</div>
      </h1>
      <main>
        <Link to="/new-order/start">Start New Order</Link>
      </main>
    </>
  );
}
