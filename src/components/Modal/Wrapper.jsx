
import React from 'react';
import './Wrapper.scss';

function Wrapper({ children, onClose }) {
    return (

        <div className="overlay" onClick={onClose}>

            <div className="modal" onClick={(e) => e.stopPropagation()}>

                {children}

            </div>

        </div>
    );
};


export default Wrapper;
