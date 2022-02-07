/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from "@testing-library/react";
import Categories from './Categories.jsx';

const handleClick = jest.fn();

describe('Categories', () => {
  it('renders Categories', () => {
    const { getByText } = render((
      <Categories
        categories={[]}
        selectedCategory={'전체'}
        handleClick={handleClick}
      />
    ));

    expect(getByText(/Nav/)).not.toBeNull();
  });
});
