import React from 'react';
import Wrapper from './Wrapper';
import Close from './Close';
import Header from './Header';
import Body from './Body';
// import Footer from '..Button/ButtonContainer';
import Footer from '../Button/ButtonContainer'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, removeFromFavorites, closeModal } from '../../store';

function Modal({ isOpen, onClose, title, product, actionType, actionPayload }) {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    if (actionType === "addToCart") {
      dispatch(addToCart(actionPayload));
    }
    if (actionType === "removeFromCart") {
      dispatch(removeFromCart(actionPayload));
    }
    if (actionType === "removeFromFavorites") {
      dispatch(removeFromFavorites(actionPayload));
    }
    dispatch(closeModal());
  };

  if (!isOpen) return null;

  return (
    <Wrapper onClose={onClose}>
      <Close onClick={onClose}/>
      <Header>{title}</Header>
      {product && (
        <Body>
          <div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Color: {product.color}</p>
            <p>Sku: {product.sku}</p>
            <p>Price: ${product.price}</p>
          </div>
        </Body>
      )}
      <Footer
        firstText="NO, CANCEL"
        firstClassNames="white-btn"
        firstClick={onClose}
        secondaryText="YES, CONFIRM"
        secondaryClassNames="violet-btn"
        secondaryClick={handleConfirm}
      />
    </Wrapper>
  );
}

export default Modal;

