import React from 'react';
import './header.scss'
import logo from '../../assets/icons/elephant.png';
import NavBar from './Navbar';

const Header = () => {
    return(
        <header>
            <div className="header-div">
                <div className="header-div-inner">
                    <a className="logo">
                        <img src={logo}/>
                    </a>
                    <NavBar/>
                </div>
            </div>
        </header>
    )
};

export default Header;