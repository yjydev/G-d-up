import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

export default function SignupPage({
  emailRef,
  userNameRef,
  passwordRef,
  passwordConfirmRef,
  onClickSubmit
}) {
  return (
    <div css={LivingRoom}>
      <div css={Closet}>
        <div css={ItemsGridWrapper}>
          <br />
          <div css={Title}>
            <h1>회원가입</h1>
          </div>
          <div css={inputGroup}>
            <input css={inputStyle}
              ref={emailRef}
              id="email"
              type="text"
              placeholder='이메일을 입력해주세요'
            />
            <br/>
            <input css={inputStyle}
              ref={userNameRef}
              id="username"
              type="text"
              placeholder='이름을 입력해주세요'
            />
            <br/>
            <input css={inputStyle}
              ref={passwordRef}
              id="username"
              type="password"
              placeholder='비밀번호를 입력해주세요'
            />
            <br/>
            <input css={inputStyle}
              ref={passwordConfirmRef}
              id="confirmation"
              type="password"
              placeholder='비밀번호를 확인해주세요'
            />
          </div>
          <button css={LoginBtn} onClick={onClickSubmit}>가입</button>
          <hr css={hrStyle} />
          <Link to='/login'>
              이미 회원이신가요?
          </Link>
        </div>
        <Link to='/'>
          <button css={BackBtn}>
            뒤로
          </button>
        </Link>
      </div>
    </div>
  );
}

const LivingRoom = css`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/images/dressroombackground.jpg");
  background-size: cover;
  background-position: center;
`;

const Title = css`
  text-align: center;
  color: white;
  font-size: 1.5rem;
  margin: 0rem;
`;

const Closet = css`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 65%;
  display:inline-block;
  margin-top: 7%;
`;

const ItemsGridWrapper = css`
  position: relative;
  width: 60%;
  height: 90%;
  margin: 2.5rem auto;
  background-color: #BFAEA4;
  border-radius: 0.5rem;
  opacity: 0.9;
  text-align: center;
`;

const inputGroup = css`
  padding: 5px;
`;

const inputStyle = css`
  width: 70%;
  height: 45px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  background-color: #F2F2F2;
  margin: 5px;
`;

const hrStyle = css`
  margin-top: 5%;
  width: 70%;
  align: center;
  color: #E5E5E5;
`;

const LoginBtn = css`
  width: 70%;
  height: 45px;
  background: #ecc194;
	border: 0;
	border-radius: 15px;
  font-size: 15px;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	cursor: pointer;
  margin: 5px;
`;

const BackBtn = css`
  width: 5rem;
  height: 3rem;
  position: absolute;
  left: 75.7rem;
  top: 47rem;
  background: #ecc194;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%);
  cursor: pointer;
`;
