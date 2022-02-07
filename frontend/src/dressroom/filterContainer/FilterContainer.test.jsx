/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from "@testing-library/react";
import FilterContainer from './FilterContainer.jsx';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

describe('FilterContainer', () => {
  it('renders Filter', () => {
    const initialState = {
      'category': '전체',
      'isUserItem': false,
      'selectedSeason': [],
      'selectedColors': [],
      'custom': [],
    };
    
    useSelector.mockImplementation((selector) => selector({
      initialState,
    }));

    const { getByText } = render((
      <FilterContainer />
    ));

    expect(getByText(/옷장/)).not.toBeNull();
    expect(getByText(/옷 추가/)).not.toBeNull();
  });
});
