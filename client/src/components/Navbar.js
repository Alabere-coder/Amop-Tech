import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/"><h1>UNITY & PROGRESS</h1></a>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/community">Community</Link>
                <Link to="/company">Company</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
            </div>
        </nav>
    )
}

export default Navbar