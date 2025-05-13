import React from 'react';
import LikedIcon from '../../assets/Liked.svg';
import CartIcon from '../../assets/Cart.svg';
import DontLikedIcon from '../../assets/Heart.png';
import Button from '../Button/Button';
import './Product.scss';

function Product({
  product,
  isInCart,
  isFavorite,
  onAddToCart,
  onAddToFavorites,
  onRemoveFromCart,
  onRemoveFromFavorites,
  showAddToCart = true,
  showRemoveFromCart = false,
  showRemoveFromFavorites = false,
}) {
  const { name, color, image, sku, price } = product;

  return (
    <div className="card">
      
      <Button
        classNames={` ${isFavorite ? "favorite" : "card_liked"}`}
        onClick={onAddToFavorites}
        disabled={isFavorite}
      >
        <img src={LikedIcon} className="card_liked-image" alt="Liked" />
      </Button>
      

      <img className="product_image" src={image} alt={name} />

      <h3>{name}</h3>
      <p>Color: {color}</p>
      <p>Sku: {sku}</p>
      <p>${price}</p>

      <div className="card-buttons">
        {showAddToCart && (
          <Button
            classNames={` ${isInCart ? 'white-btn' : 'violet-btn'}`}
            onClick={onAddToCart}
            disabled={isInCart}
          >
            {isInCart ? "Already in cart" : "Add to cart"}
            <img src={CartIcon} className={` ${isInCart ? 'card_cart-image_toggle' : 'card_cart-image'}`} alt="Cart" />
          </Button>
        )}

        {showRemoveFromFavorites && (
          <Button
            classNames="violet-btn"
            onClick={onRemoveFromFavorites}
          >
            Remove from favorites
            <img src={DontLikedIcon} className='card_cart-image' alt="Cart" />
          </Button>
        )}
      </div>

      {showRemoveFromCart && (
        <Button
          classNames="violet-btn"
          onClick={onRemoveFromCart}
        >
          Remove from cart
        </Button>
      )}
    </div>
  );
}

export default Product;