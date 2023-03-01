import React, { useState } from "react";

export const EmployeeAdd = (props) => {

  const [name, setname] = useState('')
  const [salary, setsalary] = useState('')

  const nameHandler =(e)=>{
   // console.log(e.target.value)
    setname(e.target.value)
  }
  const submit = (e)=>{
    e.preventDefault()
    console.log(name)
    console.log(salary)
    var data = {
      name:name,
      salary:salary
    }
    props.addEmp(data)
    

  }

  return (
    <div>
      <h1>ADD EMPLOYEE....</h1>
      <form onSubmit={submit}>
        <div>
          <label>Employee Name</label>
          <input type="text" onChange={(e)=>{nameHandler(e)}}></input>
          {name}
        </div>
        <div>
          <label>Employee Salary</label>
          <input type="text" onChange={(e)=>{setsalary(e.target.value)}}></input>
        </div>
        <div>
          
          <input type="submit" value ="submit"></input>
        </div>
      </form>
    </div>
  );
};
