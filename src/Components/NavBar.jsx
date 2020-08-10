import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="navbar">
            <Link to="/login">login</Link>
            <Link to="/signup">sign up</Link>
            <Link to="/">my profile</Link>
            <Link to="/events">sites</Link>
            <Link to="/about">about</Link>
            {/* <button className="logoutBtn" onClick={props.logout}><span role="img" aria-label="user-controls">{props.currentUser ? props.currentUser.name : "👤"} ⬇</span></button> */}

        </div>
    )
}
export default NavBar;