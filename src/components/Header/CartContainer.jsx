

import React from 'react';
import { Link } from "react-router-dom";
import Cart from '../../assets/Cart.svg'
import Liked from '../../assets/Liked.svg'

import './CartContainer.scss'

function CartContainer({cartLength, favoritesLength}) {

    
    
    return(
         
        <div  className='cartContainer'>
            
            <Link to='/favorites' className='cart'>
                <span className="counter">{favoritesLength}</span>
                <img src={Liked} className='CartImg' alt="Liked" />
            </Link>

            
            <Link to='/cart' className='cart'>
                <span className="counter">{cartLength}</span> 
                <img src={Cart} className='CartImg' alt="Cart" />
            </Link>

        </div>
  
    )
}

export default CartContainer;