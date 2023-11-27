import { Link } from "react-router-dom";

export default function Customer({ customer }) {
  return (
    <section className="wrapper">
      <div className="wrapper-item">Name: {customer.name}</div>
      <div className="wrapper-item">
        Address: {customer.address}, {customer.city} {customer.state},{" "}
        {customer.zip}
      </div>
      <div className="wrapper-item">Phone Number: {customer.phoneNumber}</div>
      <div className="wrapper-item">
        <Link to="/admin/customer-orders">Customer Orders</Link>
      </div>
    </section>
  );
}
