import React from 'react';

import ClothesItem from './ClothesItem.jsx';

export default function ClothesItemList({ clothes, onMouseOverHandler, OnMouseLeaveHandler }) {
  const numbers = [];
  for (let i = 0; i < 16; i++) {
    numbers.push(undefined);
  }

  return (
    numbers.map((number, idx) => {
      const item = clothes[idx] || undefined;
      return (
        <ClothesItem
          key={idx}
          item={item}
          onMouseOverHandler={onMouseOverHandler}
          OnMouseLeaveHandler={OnMouseLeaveHandler}
        />
      );
    }

    )
  );
}
