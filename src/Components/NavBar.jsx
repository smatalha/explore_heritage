import React from 'react';
import { Link } from 'react-router-dom';
// import { Button} from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'


const NavBar = () => {

    return (
        <div className="navbar">
            {/* <Image src='/images/logo1.png'/> */}
            <Image src="/images/logo1.png" alt="" srcset="" /> Explore World's  Heritages
            {/* <p className='' >Find Heritage to explore</p> */}
            <Link to="/sites">Heritages</Link>

            <Link to="/" ></Link>
            {/* <Link to="/wishlist">Wish List</Link> */}
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
            {/* <Link to="/logout">Logout</Link> */}
            {/* <Link to="/about">About</Link> */}
        </div>
    )
}
export default NavBar;