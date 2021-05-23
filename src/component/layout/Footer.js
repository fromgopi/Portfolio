import React from 'react';
import './footer.scss'
import './header.scss'
import logo from '../../assets/icons/elephant.png';

const Footer = () => {
    return(
        <footer className="footer-main">
            <main className="main">
                <img src={logo}/>
                <p className="floating-p">
                    Icons made by 
                    <a href="https://www.freepik.com" title="Freepik">Freepik</a> 
                    from 
                    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </p>
            </main>
            <div>
            </div>
        </footer>
    )
}

export default Footer;