/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from "@testing-library/react";
import ClothesDetailContainer from './ClothesDetailContainer.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('ClothesDetailContainer', () => {
  it('renders ClothesDetailContainer', () => {
    const { getByText } = render((
      <MemoryRouter>
        <ClothesDetailContainer />
      </MemoryRouter>
    ))

    expect(getByText(/옷 정보/)).not.toBeNull();
  });
});
