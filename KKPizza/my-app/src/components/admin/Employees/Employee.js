import { useState } from "react";
import EmployeeInfo from "./EmployeeInfo";

export default function Employee({
  employee,
  handleEmployeeInfoEdit,
  isEditEmployee,
}) {
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  const handleDropDown = () => {
    setIsDroppedDown(!isDroppedDown);
  };

  return (
    <section className="wrapper">
      <div className="wrapper-item">
        ID#{employee.employeeID} {employee.name}{" "}
      </div>
      <button onClick={handleDropDown}>View</button>
      {isDroppedDown && (
        <>
          <EmployeeInfo
            employee={employee}
            handleEmployeeInfoEdit={handleEmployeeInfoEdit}
            isEditEmployee={isEditEmployee}
            isDroppedDown={isDroppedDown}
          />
          <button onClick={handleEmployeeInfoEdit}>Edit</button>
        </>
      )}
    </section>
  );
}
