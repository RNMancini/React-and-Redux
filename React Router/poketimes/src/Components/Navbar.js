import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

}
const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
        <div className="container">
        <a className="brang-logo">Poke'Times</a>
        <ul className="right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</NavLink></li>
        <li><Link to="/contact">Contact</NavLink></li>
        </ul>
        </div>
        </nav>
        )
}

export default Navbar