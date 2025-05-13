import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Product from 'components/Product/Product';

const product = {
  name: "Test",
  color: "Red",
  sku: "123",
  price: 100,
  image: "/test.png"
};

test('Кнопка "Add to cart" змінює назву на "Already in cart" після додавання', () => {
  const onAddToCart = jest.fn();

  // isInCart = false
  const { rerender } = render(
    <Product
      product={product}
      isInCart={false}
      isFavorite={false}
      onAddToCart={onAddToCart}
      onAddToFavorites={() => {}}
      showAddToCart={true}
    />
  );

  const addBtn = screen.getByRole('button', { name: /add to cart/i });
  expect(addBtn).toBeInTheDocument();
  expect(addBtn).toHaveTextContent(/add to cart/i);

  fireEvent.click(addBtn);
  expect(onAddToCart).toHaveBeenCalledTimes(1);

  // isInCart = true
  rerender(
    <Product
      product={product}
      isInCart={true}
      isFavorite={false}
      onAddToCart={onAddToCart}
      onAddToFavorites={() => {}}
      showAddToCart={true}
    />
  );

  expect(screen.getByRole('button', { name: /already in cart/i })).toBeDisabled();
});