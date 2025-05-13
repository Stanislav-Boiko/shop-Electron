
import React from 'react';
import './Close.scss';
import Button from '../Button/Button'; 


function Close({onClick}) {
    return (

        <Button children='X' classNames="closelImg" onClick={onClick}/>

    )
}


export default Close;