import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>UNITY & PROGRESS</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/pricelist">Price-List</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/community">Community</Link>
                <Link to="/company">Company</Link>
                <Link to="/contact">Contact</Link>
                {/* <Link to="/services">Services</Link> */}
                <div className="dropdown">
                    <button className="dropbtn">Services
                        <FaCaretDown className="drop1" />
                    </button>
                    <div className="dropdown-content">
                        <Link href="/">Link 1</Link>
                        <Link href="/">Link 2</Link>
                        <Link href="/">Link 3</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar