
import React from 'react';
import './Button.scss';

function ModalButton({ type="button", classNames, onClick, children, disabled }) {
    return(
        
        <button type={type} className={classNames} onClick={onClick} disabled={disabled}>
            {children}
        </button>
        
    )
}


export default ModalButton;