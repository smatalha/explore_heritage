import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/wishlist">Wish List</Link>
            <Link to="/sites">Heritages</Link>
            <Link to="/">Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">about</Link>
        </div>
    )
}
export default NavBar;