
import React from 'react';
import Button from './Button';
import './ButtonContainer.scss';



function ButtonContainer({ firstText, secondaryText, firstClick, secondaryClick, firstClassNames, secondaryClassNames }) {
    return (
        <div className="buttons-container">

            {firstText && <Button classNames={firstClassNames} onClick={firstClick} children={firstText}/>}
            
            {secondaryText && <Button classNames={secondaryClassNames} onClick={secondaryClick} children={secondaryText}/>}
         
        </div>
    );
};
  
export default ButtonContainer;