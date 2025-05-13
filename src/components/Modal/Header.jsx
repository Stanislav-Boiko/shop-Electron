import React from 'react';
import './Header.scss';


function Header ({ children }) {
    return (
        
        <h2 className="titleModal">{children}</h2>

    )
};


export default Header;