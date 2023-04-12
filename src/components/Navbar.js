import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context'

export const Navbar = () => {
    var {id} =useContext(AppContext)
  return (
    <div>
        {id}
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
