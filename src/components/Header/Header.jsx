import React from 'react';
import { Link, useLocation } from "react-router-dom";
import CartContainer from "./CartContainer";
import './Header.scss'

function Header({cartLength, favoritesLength}) {
    const location = useLocation(); // Отримуємо поточний шлях
    const currentPath = location.pathname;

    return (
        <header className="header">
               
            <div className='nav'>
                <Link
                    to='/shop'
                    className='nav_logo'
                >
                    Electron
                </Link>

                <Link
                    to='/shop'
                    className={`nav_item ${currentPath === '/shop' ? 'active' : ''}`}
                >
                    Shop
                </Link>

                <Link
                    to='/about'
                    className={`nav_item ${currentPath === '/about' ? 'active' : ''}`}
                >
                    About
                </Link>

                <Link
                    to='/services'
                    className={`nav_item ${currentPath === '/services' ? 'active' : ''}`}
                >
                    Services
                </Link>

                <Link
                    to='/contacts'
                    className={`nav_item ${currentPath === '/contacts' ? 'active' : ''}`}
                >
                    Contacts
                </Link>

                <CartContainer cartLength={cartLength} favoritesLength={favoritesLength} />
            </div>
            
        </header>
    );
}

export default Header;
