import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <>
        <section className="nav">
            <ul>
                <li> <NavLink to="/"> Home </NavLink> </li>
                <li> <NavLink to="/about"> About Me </NavLink> </li>
                <li> <NavLink to="/project"> Projects </NavLink> </li>
                <li> <NavLink to="/education"> Education </NavLink> </li>
            </ul>
        </section>
    </>
  )
}

export default Nav;
