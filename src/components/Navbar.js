import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About Us</Link>
            </li>
            <li>
                <Link to='/contact'>Contact Us</Link>
            </li>
        </ul>
    </div>
  )
}
