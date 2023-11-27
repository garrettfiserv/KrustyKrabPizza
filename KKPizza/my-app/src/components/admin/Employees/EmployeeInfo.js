import { useState } from "react";

export default function EmployeeInfo({
  employee,
  handleEmployeeInfoEdit,
  isEditEmployee,
  isDroppedDown,
}) {
  const [id, setId] = useState(employee.employeeID);
  const [isAdmin, setIsAdmin] = useState(employee.isadmin);
  const [isActive, setIsActive] = useState(employee.isactive);
  const [title, setTitle] = useState(employee.title);
  const [name, setName] = useState(employee.name);
  const [phone, setPhone] = useState(employee.phonenumber);

  const handleUpdate = (e) => {
    e.preventDefault();
    handleEmployeeInfoEdit(id, isAdmin, isActive, title, name, phone);
  };

  return (
    <section>
      {isEditEmployee ? (
        <>
          <div>Employee ID: {employee.employeeID}</div>
          <form onSubmit={handleUpdate} className="form-container">
            <input
              name="title"
              value={title}
              placeholder="Title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
            />
            <input
              name="name"
              value={name}
              placeholder="Full Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
            <input
              name="phone"
              value={phone}
              placeholder="Phone Number"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
            />
            <button type="submit">Update</button>
          </form>
        </>
      ) : (
        <>
          <div>Employee ID: {employee.employeeID}</div>
          <div>Employee Title: {employee.title}</div>
          <div>Employee Name: {employee.name}</div>
          <div>Employee Phone Number: {employee.phonenumber}</div>
          <div>Active? {employee.isactive}</div>
        </>
      )}
    </section>
  );
}
