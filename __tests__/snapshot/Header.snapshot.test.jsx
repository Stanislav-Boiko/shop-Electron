import React from 'react';
import { render } from '@testing-library/react';

import Header from 'components/Header/Header';


import { MemoryRouter } from 'react-router-dom';


test('Header рендериться правильно', () => {
    // Обгортаємо Header у MemoryRouter, бо він використовує useLocation та Link
    const { asFragment } = render(
      <MemoryRouter initialEntries={['/shop']}>
        <Header cartLength={2} favoritesLength={3} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  })