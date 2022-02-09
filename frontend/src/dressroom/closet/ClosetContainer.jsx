import React from 'react';
import { Link } from 'react-router-dom';
import ClothesItemListContainer from './clothesList/ClothesItemListContainer.jsx';
import FilterContainer from './filter/FilterContainer.jsx';
import AddClothesContainer from './addClothes/AddClothesContainer.jsx';
import ClothesDetailContainer from './clothesDetail/ClothesDetailContainer.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { filteredClothesSelector } from '../../filterSelector.js';
// import { css, jsx } from '@emotion/react';

import {
  changeisModalOpen
} from '../../slices/modalSlice';

export default function ClosetContainer() {
  const dispatch = useDispatch();
  const filteredClothes = useSelector(state => filteredClothesSelector(state));
  console.log(filteredClothes);

  return (
    <div>
      <h5>옷장</h5>
      <FilterContainer />
      <ClothesItemListContainer />
      <ClothesDetailContainer />
      <button
        onClick={() => dispatch(changeisModalOpen(true))}
      >
				옷 추가
      </button>
      <AddClothesContainer
      />
      <Link to='/dressroom'>
        <button>
					뒤로
        </button>
      </Link>
    </div>
  );
}

// const GridContainer = css`
// 	display: grid;
// `;
