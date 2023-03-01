import React, { useState } from "react";
import { EmployeeAdd } from "./EmployeeAdd";
import { EmployeeList } from "./EmployeeList";

export const Employee = () => {
  var title = "Employee..";
  var [employees, setemployees] = useState([
    {
      id: 1,
      name: "samir",
      salary: 10000,
      isActive: true,
    },
    {
      id: 2,
      name: "raj",
      salary: 15000,
      isActive: true,
    },
    {
      id: 3,
      name: "parth",
      salary: 16700,
      isActive: false,
    },
  ]);

  const deleteEmployee = (id) => {
    employees = employees.filter((e) => e.id !== id);
    console.log(employees);
    setemployees(employees);
  };
  const addEmp =(emp)=>{
    console.log(emp)

    //spread operator
    // employees = [...employees,emp]
    // setemployees(employees)
    setemployees([...employees,emp])
    //setemployees(employees.push(emp))

  }

  return (
    <div>
      <h1>EMPLOYEE</h1>
      <EmployeeAdd addEmp = {addEmp}/>
      <EmployeeList t={title} emp={employees} deleteemp={deleteEmployee} />
    </div>
  );
};
