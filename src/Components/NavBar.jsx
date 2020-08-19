import React from 'react';
import { Link } from 'react-router-dom';
// import { Image } from 'semantic-ui-react'


const NavBar = () => {

    return (
        <div className="navbar">
            {/* <Image src='/images/logo1.png'/> */}
            <img src="/images/logo1.png" alt="" srcset=""/>
            <Link to="/" >Home</Link>
            {/* <Link to="/wishlist">Wish List</Link> */}
            <Link to="/sites">Heritages</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="/logout">Logout</Link>
            {/* <Link to="/about">About</Link> */}
        </div>
    )
}
export default NavBar;