import React from 'react';
import logo from '../../images/wof-fitness-aachen-logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='nav-container'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <a href="">Home</a>
                    <a href="">Login</a>
                    <a href="">Contact Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;