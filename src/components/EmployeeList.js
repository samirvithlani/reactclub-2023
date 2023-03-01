import React from 'react'
import { Employee } from './Employee'

export const EmployeeList = (props) => {
  return (
    
    <div>EmployeeList

        <h1>{props.t}</h1>
        {
            props.emp.map((e)=>{
                return(
                    <ul>
                    <li>{e.id}</li>
                    <li>{e.name}</li>
                    <li>{e.salary}</li>
                    <li>
                        {
                            e.isActive ? "Yes" : "No"
                        }
                    </li>
                    <li>
                        <button onClick={()=>{props.deleteemp(e.id)}}>DELETE</button>
                    </li>

                </ul>
                )
                
            })
        }    
    
        {/* <ul>
            <li>{props.emp.id}</li>
            <li>{props.emp.name}</li>
            <li>{props.emp.salary}</li>
        </ul> */}
        {/* <button onClick={props.test}>Test</button> */}
        
        
    </div>
  )
}
