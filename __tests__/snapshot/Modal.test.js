import React from 'react';
import { render } from '@testing-library/react';
import Modal from 'components/Modal/Modal';
import { Provider } from 'react-redux';
import { store } from 'store';

test('Modal не рендериться, якщо isOpen=false', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Modal
        isOpen={false}
        onClose={() => {}}
        title="Test Modal"
        product={null}
        actionType=""
        actionPayload=""
      />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Modal рендериться з продуктом', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Modal
        isOpen={true}
        onClose={() => {}}
        title="Test Modal"
        product={{ name: "Test", color: "Red", sku: "123", price: 100, image: "/test.png" }}
        actionType="addToCart"
        actionPayload="123"
      />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

