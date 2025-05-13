import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from 'components/Product/Product';

const product = {
  name: "Test",
  color: "Red",
  sku: "123",
  price: 100,
  image: "/test.png"
};

test('Кнопка "Remove from favorites" має правильну назву', () => {
  render(
    <Product
      product={product}
      isInCart={false}
      isFavorite={true}
      onAddToCart={() => {}}
      onAddToFavorites={() => {}}
      onRemoveFromFavorites={() => {}}
      showAddToCart={false}
      showRemoveFromFavorites={true}
    />
  );
  expect(screen.getByRole('button', { name: /remove from favorites/i })).toBeInTheDocument();
});

test('Кнопка "Remove from cart" має правильну назву', () => {
  render(
    <Product
      product={product}
      isInCart={true}
      isFavorite={false}
      onAddToCart={() => {}}
      onAddToFavorites={() => {}}
      onRemoveFromCart={() => {}}
      showAddToCart={false}
      showRemoveFromCart={true}
    />
  );
  expect(screen.getByRole('button', { name: /remove from cart/i })).toBeInTheDocument();
});