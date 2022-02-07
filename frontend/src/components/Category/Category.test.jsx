/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from "@testing-library/react";
import Category from './Category.jsx';

describe('Category', () => {
  it('renders Category', () => {
    render(
      <Category />
    );
  });
});
