import { Link, useNavigate } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <h1>Menu Page</h1>
      <main>
        <Link to="/new-order/customer-info">Return</Link>
        <div>Menu stuff</div>
      </main>
    </>
  );
}
