import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Navigation() {
  const [text, setText] = useState('');

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);
  }

  function handleSubmit(): void {
    console.log(text);
  }

  return (
    <>
      <Nav>
        <HomeButton>
          <Link id="home" to="/">
            <Logo
              // eslint-disable-next-line global-require
              src={require('../media/logo.svg')}
              alt="아이들 로고"
            />
          </Link>
        </HomeButton>
        {/*        <Search>
          <Form onSubmit={handleSubmit}>
            <Input
              id="search-text"
              type="search"
              placeholder="검색"
              value={text}
              onChange={onChange}
            />
            <Button type="submit">❤️</Button>
          </Form>
        </Search> */}
      </Nav>
      <PlaceHolder />
    </>
  );
}

export default Navigation;

// css
const PlaceHolder = styled.div`
  height: 60px;
`;
const Nav = styled.div`
  z-index: 5;
  width: 100%;
  height: 60px;
  position: fixed;
  background: #49008d;

  display: inline;
`;

const HomeButton = styled.div``;

const Search = styled.div`
  width: 300px;
`;

const Form = styled.form`
  height: 24px;
`;

const Input = styled.input`
  /* PC (해상도 1024px ~ )*/
  @media all and (min-width: 1024px) {
    /*스타일입력*/
  }

  /* 테블릿 가로, (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    /*스타일입력*/
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    /*스타일입력*/
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    /*스타일입력*/
  }
  height: 100%;
  border-radius: 0px;
  border: 0;
  flex: 1;

  font-size: 16pt;
`;

const Button = styled.button`
  height: 100%;
  border-radius: 0px;
  width: 37px;
  border: 0;
  background-color: white;
`;

const Logo = styled.img`
  margin: 0px 20px 0px 20px;
  height: 60px;
`;
