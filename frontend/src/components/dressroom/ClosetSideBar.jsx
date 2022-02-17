import React from 'react';
import { css } from '@emotion/react';
import TagSearchBar from './TagSearchBar';
import Tag from './Tag';

export default function ClosetSidebar(props) {
  const {
    season,
    colors,
    selectedColors,
    onChangeSeason,
    onChangeColor,
    customTags,
    deleteTagHandler,
    inputRef,
    onKeyPress,
  } = props;

  return (
    <aside css={sidebarStyle}>
      <TagSearchBar
        inputRef={inputRef}
        onKeyPress={onKeyPress}
      />
      <>
        <p css={title}>🌹 season</p>
        <ul css={seasonItems}>
          {season.map((item, index) => (
            <li key={index} css={menuItem}>
              <input
                data-testid={item}
                css={checkbox}
                type="checkbox"
                id={item}
                onChange={(event) => onChangeSeason(event.target.checked, item)}
              />
              <label css={checkboxTitle} htmlFor={item}>{item}</label>
            </li>
          ))}
        </ul>
      </>
      <>
        <p css={title}>🌹 color</p>
        <ul css={colorItems}>
          {colors.map(({ name, code }, index) => {
            const isSelected = selectedColors.includes(name);
            const colorCode = code || 'linear-gradient(to right, blue, green, yellow, pink, red)';
            return (
              <li key={index} css={menuItem} className='hvr-push'>
                <button
                  data-testid={name}
                  css={colorButton({ colorCode, isSelected })}
                  onClick={() => onChangeColor(name)}
                >
                </button>
              </li>
            );
          })}
        </ul>
      </>
      <div css={css`min-height: 25%`}>
        <ul css={tagContainer}>
          {customTags.map((value, index) => {
            return (
              <Tag
                key={index}
                value={value}
                deleteTagHandler={deleteTagHandler}
              />
            );
          })}
        </ul>
      </div>
    </aside >
  );
}

const sidebarStyle = css`
  display: grid;
  position: relative;
  grid-template-rows: 1fr 1fr 2fr 1fr 3fr 1fr;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  min-width: 11rem;
  width:15%;
  height: 29rem;
  box-sizing: border-box;
  margin: 1rem;
  padding: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.l);
  box-shadow: 0px 0px 10px rgba(1, 1, 1, 0.2);
  font-size: 18px;
  background-color: rgb(242, 241, 240);
  overflow-y: auto;
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

const menuItem = css`
  font-size: 14px;
  padding: 0.2rem 0px;
  cursor: pointer;
`;

const seasonItems = css`
  font-size: 8px;
  padding: 0 1px;
  list-style:none
`;

const colorItems = css`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style:none;
  padding: 0.2rem 0px;
  text-overflow: ellipsis;
  margin:0px;
`;

const colorButton = ({ colorCode, isSelected }) => css`
  background: ${colorCode};
  height: 1.3rem;
  width: 1.3rem;
  cursor: pointer;
  border-radius: 50%;
  border: 0;
  margin: 5px;
  ${isSelected &&
  `
    border: 3px solid gold;
  `}
`;

const tagContainer = css`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  padding-left: 0px;
  list-style:none;
  margin-top: 0px;
  height: 15%;
  min-height: 30px;
`;

const title = css`
  font-size: 14px;
  margin: 10px 5px;
  cursor: pointer;
`;

const checkbox = css`
  vertical-align: middle;
  position: relative;
  bottom: 0.5px;
  cursor: pointer;
`;

const checkboxTitle = css`
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
`;
