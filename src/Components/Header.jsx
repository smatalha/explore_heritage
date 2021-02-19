import React from "react"
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <ul className="header_ul">
                    <h1>Welcome To Explore The Heritage</h1>
                    <h2 >Lets Explore UNESCO World Heritages&nbsp;&nbsp;
                            <Link smooth= {true} to="signUp" offset={-110} className= " header-link btn-md btn-main-offer">SignUp</Link>
                    </h2>
                </ul>
            </div>
        </div>
    )
}

export default Header;