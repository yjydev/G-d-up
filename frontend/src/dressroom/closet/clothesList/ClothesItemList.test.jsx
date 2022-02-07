/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from "@testing-library/react";
import ClothesItemList from './ClothesItemList.jsx';
import { clothesData } from '/fixtures/clothesList.js';

describe('ClothesItemList', () => {
  const clothes = clothesData;
  
  it('renders ClothesItemList', () => {
    render(
      <ClothesItemList
        clothes={clothes}
      />
    )
  });
});
