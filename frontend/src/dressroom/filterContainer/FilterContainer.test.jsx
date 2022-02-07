/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render } from "@testing-library/react";
 import FilterContainer from './FilterContainer.jsx';
 import { MemoryRouter } from 'react-router-dom';
 
 describe('FilterContainer', () => {
   it('renders Filterr', () => {
     const { getByText } = render((
        <FilterContainer />
     ));
 
     expect(getByText(/옷장/)).not.toBeNull();
     expect(getByText(/옷 추가/)).not.toBeNull();
   });
 });
 