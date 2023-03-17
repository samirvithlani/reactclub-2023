import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const UserList = () => {
  const [users, setusers] = useState([])
  const getAlluser = async() =>{

    axios.get("http://localhost:3001/user/user").then((res)=>{
      setusers(res.data.data)
    }).catch((err)=>{

    })
  }
  useEffect(() => {
    
  getAlluser()
    
  }, [])
  
  return (
    <div>
      <ul>
        {
          users?.map((user)=>{
            return <li>{user.name}</li>
            
          })
        }
      </ul>
        
    </div>
  )
}
