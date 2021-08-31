import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './navbar.scss';
import About from '../About/About';


const history = createBrowserHistory()


const NavBar = () => {
    return(
        <Router history={history}>
            <nav>
                <ul className="navbar-ul-top">
                    <li className="navbar-ul-li">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-ul-li">
                        <Link to="/about" >About Me</Link>
                        {/* <Route exact="/about" component={About}/> */}
                    </li>
                    <li className="navbar-ul-li">
                        <a aria-current="page" href="/">Projects</a>
                    </li>
                    <li className="navbar-ul-li">
                        <a aria-current="page" href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </Router>
    )
}

export default NavBar;