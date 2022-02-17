import React from 'react';

import ClothesItem from './ClothesItem.jsx';

import { css } from "@emotion/react";

import BackImg from '../../../public/images/add_icon.svg';

export default function ClothesItemList(props) {
  const { filteredClothes, onMouseOverHandler, OnMouseLeaveHandler, onClickHandler, onClickModal, isLoggedInUser } = props;
  const numbers = [];
  for (let i = 0; i < 20; i++) {
    numbers.push(null);
  }

  return (
    <div css={ItemListContainer}>
      {numbers.map((number, idx) =>
        <ClothesItem
          key={idx}
          item={filteredClothes[idx]}
          onMouseOverHandler={onMouseOverHandler}
          OnMouseLeaveHandler={OnMouseLeaveHandler}
          onClickHandler={onClickHandler}
        />
      )}
      <img
        css={AddIcon({ isLoggedInUser })}
        src={BackImg}
        width="100rem"
        onClick={onClickModal}
        alt="추가아이콘"
        className='hvr-float'
      />
    </div>
  );
}

const ItemListContainer = css`
  position: relative;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-width: 23rem;
  width: 95%;
  height: 95%;
  margin-top: 0.5rem;
  background-color: transparent;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    background-color: #BFAEA4;

    &:hover {
      background-color: #BFAEA4;
    }
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
`;

const AddIcon = ({ isLoggedInUser }) => css`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  position: absolute;
  right: 0rem;
  bottom: 0rem;
  ${!isLoggedInUser &&
    `
      display: none;
    `}
`;
