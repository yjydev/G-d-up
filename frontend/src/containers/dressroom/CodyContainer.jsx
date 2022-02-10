import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CodyCreateForm from '../../components/dressroom/CodyCreateForm';
import { resetFilter } from '../../slices/filterSlice';
import FilterContainer from './FilterContainer';
import ClothesItemList from '../../components/dressroom/ClothesItemList';

export default function CodyContainer() {
  const { clothes } = useSelector(state => state.clothesSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [codyItems, setCodyItems] = useState([]);

  const onClickHandler = target => {
    if (codyItems.find(item => item.image === target.image)) {
      return;
    }

    const z_index = codyItems.length + 1;
    const initalPosition = { x: 0, y: 0, z: z_index };

    setCodyItems(() => [...codyItems, {
      id: Date.now(),
      image: target.image,
      position: initalPosition,
    }]);
  };

  const handleOnStart = (activatedItem) => {
    const standard = activatedItem.position.z;

    if (codyItems.length === standard) {
      return;
    }

    setCodyItems(codyItems.map((item) => {
      const { z } = item.position;

      if (item.id === activatedItem.id) {
        return {
          ...item,
          position: {
            ...item.position,
            z: codyItems.length
          }
        };
      }

      if (z > standard) {
        return {
          ...item,
          position: {
            ...item.position,
            z: z - 1
          }
        };
      }

      return item;
    }));
  };

  const handleOnStop = (itemId, data) => {
    console.log(itemId, data);
    setCodyItems(codyItems.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          position: {
            x: data.x,
            y: data.y,
            z: item.position.z
          }
        };
      }

      return item;
    }));
  };

  return (
    <>
      <h1>CodyContainer</h1>
      <button onClick={() => {
        dispatch(resetFilter());
        navigate('/dressroom');
      }}>
        드레스룸으로 돌아가기
      </button>
      <FilterContainer />
      <ClothesItemList
        clothes={clothes}
        onClickHandler={onClickHandler}
      />
      <CodyCreateForm
        codyItems={codyItems}
        handleOnStart={handleOnStart}
        handleOnStop={handleOnStop}
      />
    </>
  );
}
