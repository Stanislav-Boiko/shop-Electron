import React from 'react';
import Product from './Product';
import './ProductList.scss';
import ButtonContainer from '../Button/ButtonContainer';

function ProductList({ products, 
                      isInCart, 
                      isFavorite, 
                      onAddToCart, 
                      onAddToFavorites, 
                      onRemoveFromCart, 
                      onRemoveFromFavorites, 
                      showAddToCart, 
                      showAddToFavorites, 
                      showRemoveFromCart, 
                      showRemoveFromFavorites, 
                      viewMode = "cards" 
}) {
  if (viewMode === "table") {
    return (
      <table className="products-table">
        <thead>
          <tr>
            <th>Name</th><th>Color</th><th>Sku</th><th>Price</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.sku}>
              <td>{product.name}</td>
              <td>{product.color}</td>
              <td>{product.sku}</td>
              <td>${product.price}</td>
              <td>
                <ButtonContainer
                  firstText={isInCart(product) ? "In cart" : "Add to cart"}
                  firstClassNames={isInCart(product) ? 'white-btn' : 'violet-btn'}
                  firstClick={() => onAddToCart(product)}
                  // disabled для ButtonContainer не потрібен, бо він передасться у Button
                  secondaryText={isFavorite(product) ? "In favorites" : "Add to favorites"}
                  secondaryClassNames={isFavorite(product) ? 'white-btn' : 'violet-btn'}
                  secondaryClick={() => onAddToFavorites(product)}
                  // Додаємо disabled через пропси ButtonContainer, якщо потрібно
                  firstDisabled={isInCart(product)}
                  secondaryDisabled={isFavorite(product)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  // cards view
  return (
    <div className="products-list">
      {products.map(product => (
        <Product
          key={product.sku}
          product={product}
          isInCart={isInCart(product)}
          isFavorite={isFavorite(product)}
          onAddToCart={() => onAddToCart(product)}
          onAddToFavorites={() => onAddToFavorites(product)}
          onRemoveFromCart={() => onRemoveFromCart(product)}
          onRemoveFromFavorites={() => onRemoveFromFavorites(product)}
          showAddToCart={showAddToCart}
          showAddToFavorites={showAddToFavorites}
          showRemoveFromCart={showRemoveFromCart}
          showRemoveFromFavorites={showRemoveFromFavorites}
        />
      ))}
    </div>
  );
}

export default ProductList;
