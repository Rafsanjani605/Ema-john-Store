import React from 'react';
import logo from '../../images/Logo.svg'
import './header.css'

const Header = () => {
    return (
        <nav className='header'> 
            <img src={logo} alt="" />
            <div>
                <a href="/shop">shop</a>
                <a href="/o">Orders</a>
                <a href="/i">Inventory</a>
                <a href="/about">About</a>
            </div>
            
        </nav>
    );
};

export default Header;