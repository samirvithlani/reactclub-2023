import React from 'react'
import { Link } from 'react-router-dom'

export const ContactUs = () => {
  return (
    <div>
        
        <ol>
            <li>
                <Link to = "manager">MANAGER</Link>
            </li>
            <li>
                <Link to = "CEO">CEO</Link>
            </li>
        </ol>

    </div>
  )
}
