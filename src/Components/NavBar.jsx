import React from "react"
import logo from "../logo.jpeg"
// import { Link } from "react-scroll"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-green fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="Logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="/" offset={-110} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="wishlist" offset={-110} className="nav-link" href="#">Wish List</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="sites" offset={-110} className="nav-link" href="#">Heritages</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="user" offset={-110} className="nav-link" href="#">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="login" offset={-110} className="nav-link" href="#">Log In</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;