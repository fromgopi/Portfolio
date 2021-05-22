import React from 'react';
import './navbar.scss';

const NavBar = () => {
    return(
        <nav>
            <ul className="navbar-ul-top">
                <li className="navbar-ul-li">
                    <a aria-current="page" href="/">Home</a>
                </li>
                <li className="navbar-ul-li">
                    <a aria-current="page" href="/">About Me</a>
                </li>
                <li className="navbar-ul-li">
                    <a aria-current="page" href="/">Projects</a>
                </li>
                <li className="navbar-ul-li">
                    <a aria-current="page" href="/">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;