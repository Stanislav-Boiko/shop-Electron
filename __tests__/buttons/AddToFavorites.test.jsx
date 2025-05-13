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

test('Кнопка "Add to favorites" натискається лише раз і стає disabled', () => {
  const onAddToFavorites = jest.fn();

  const { rerender } = render(
    <Product
      product={product}
      isInCart={false}
      isFavorite={false}
      onAddToCart={() => {}}
      onAddToFavorites={onAddToFavorites}
      showAddToCart={false}
    />
  );

  // Знаходимо першу кнопку (іконка серця)
  const favBtn = screen.getAllByRole('button')[0];
  expect(favBtn).not.toBeDisabled();

  fireEvent.click(favBtn);
  expect(onAddToFavorites).toHaveBeenCalledTimes(1);

  // isFavorite = true
  rerender(
    <Product
      product={product}
      isInCart={false}
      isFavorite={true}
      onAddToCart={() => {}}
      onAddToFavorites={onAddToFavorites}
      showAddToCart={false}
    />
  );

  expect(screen.getAllByRole('button')[0]).toBeDisabled();
  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(onAddToFavorites).toHaveBeenCalledTimes(1);
});