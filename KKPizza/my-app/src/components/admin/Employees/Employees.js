import { useState, useEffect } from "react";
import axios from "axios";
import Employee from "./Employee";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [isEditEmployee, setIsEditEmployee] = useState(false);
  // const [employeesFromDB, setEmployeesFromDB] = useState([]);

  useEffect(() => {
    const getAllEmployees = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/employee/getAll"
        );
        const allEmployees = response?.data;
        setEmployees(allEmployees);
        localStorage.setItem("employees", JSON.stringify(allEmployees));
        // setEmployeesFromDB(allEmployees);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    getAllEmployees();
  }, []);

  // useEffect(() => {
  //   const employeesCopy = [...employeesFromDB]; // spread operator to create a shallow copy
  //   localStorage.setItem("employees", JSON.stringify(employeesCopy));
  //   setEmployees(employeesCopy);
  // }, [employeesFromDB]);

  const handleEmployeeInfoEdit = async (
    id,
    isAdmin,
    isActive,
    updateTitle,
    updateName,
    updatePhone
  ) => {
    const updatedEmployeeData = {
      employeeID: id,
      isadmin: isAdmin,
      title: updateTitle,
      name: updateName,
      phonenumber: updatePhone,
      isactive: isActive,
    };

    try {
      const response = await axios.put(
        `http://localhost:8080/employee/updateEmployee/${id}`,
        updatedEmployeeData
      );
      // localStorage.setItem("employees", JSON.stringify(response?.data));
      // Handle the response, if needed
      console.log("User updated successfully:", response?.data);
    } catch (error) {
      // Handle errors
      console.error("Error updating user:", error.message);
    }

    // const updatedEmployees = employees.map((employee) =>
    //   employee.employeeID === id
    //     ? {
    //         ...employee,
    //         title: updateTitle,
    //         name: updateName,
    //         phonenumber: updatePhone,
    //       }
    //     : employee
    // );

    setIsEditEmployee(!isEditEmployee);
  };

  console.log(employees);
  return (
    <section>
      <h3>Employees Page</h3>
      <div>
        {employees.map((employee, i) => (
          <Employee
            key={i}
            employee={employee}
            handleEmployeeInfoEdit={handleEmployeeInfoEdit}
            isEditEmployee={isEditEmployee}
          />
        ))}
      </div>
    </section>
  );
}
