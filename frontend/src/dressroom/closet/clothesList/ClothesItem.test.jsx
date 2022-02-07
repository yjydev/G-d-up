/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from "@testing-library/react";
import ClothesItem from './ClothesItem.jsx';
import { clothesData } from '/fixtures/clothesList.js';

describe('ClothesItem', () => {
  const clothes = clothesData[0]
  const onMouseOverHandler = jest.fn();
  const OnMouseLeaveHandler = jest.fn();

  it('renders ClothesItem', () => {
    render(
      <ClothesItem
        item={clothes}
        onMouseOverHandler={onMouseOverHandler}
        OnMouseLeaveHandler={OnMouseLeaveHandler}
      />
    )
  });
});
