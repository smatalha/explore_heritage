import React from "react"
import logo from "../logo.jpeg"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="Logo..."/></a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="/" offset={-110} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="sites" offset={-110} className="nav-link" href="#">Heritages</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="wishlist" offset={-110} className="nav-link" href="#">Wish List</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="user" offset={-110} className="nav-link" href="#">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="login" offset={-110} className="nav-link" href="#">Log In</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;