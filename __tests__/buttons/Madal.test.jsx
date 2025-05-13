import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from 'components/Modal/Modal';
import { Provider } from 'react-redux';
import { store } from 'store';

function renderWithProvider(ui) {
  return render(<Provider store={store}>{ui}</Provider>);
}

test('Модальне вікно має дві кнопки з фіксованими назвами', () => {
  renderWithProvider(
    <Modal
      isOpen={true}
      onClose={() => {}}
      title="Test Modal"
      product={{ name: "Test", color: "Red", sku: "123", price: 100, image: "/test.png" }}
      actionType="addToCart"
      actionPayload="123"
    />
  );
  expect(screen.getByRole('button', { name: /no, cancel/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /yes, confirm/i })).toBeInTheDocument();
});