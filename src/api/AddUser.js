import axios from 'axios'
import React from 'react'

export const AddUser = () => {
    const addUser = async()=>{

        var data =
            {
            
                "name": "sanjana",
                "email": "sanjana@gmail.com",
                "password": "sanjana@123",
                "age": 45,
                "isActive": false,
            
        }
        var res  = await axios.post("http://localhost:3001/user/user",data)
        console.log(res.data)
        
    }
  return (
    <div>
        <h1>Add User</h1>
        <button onClick={addUser}>Add User</button>
        
    </div>
  )
}
