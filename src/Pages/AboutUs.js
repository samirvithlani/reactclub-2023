import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const AboutUs = () => {
    
    var data = [
        {
            id: 1,
            name: "Rahul",
        },
        {
            id: 2,
            name: "Ram",
        }
    ]
  return (
    <div>
        <h1>About Us</h1>
        {
            data.map((d)=>{
                return(
                    <ol>
                    <Link to ={`info/${d.id}`}>{d.name}</Link>
                    </ol>
                )
            })
        }
    </div>
  )
}
