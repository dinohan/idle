import React from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Navigation() {
  /* const [text, setText] = useState(''); */

  /* function onChange(e: ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);
  }

  function handleSubmit(): void {
    console.log(text);
  } */

  return (
    <>
      <Nav>
        <HomeButton>
          <Link id="home" to="/">
            <svg
              viewBox="0 0 1825 1363"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeMiterlimit={2}
            >
              <path
                d="M531.25 559.375h-100V931.25h100V559.375zm0-159.375h-100v100h100V400zM606.25 931.25V400h96.875v434.375h43.75V400h96.875v531.25h-237.5zM890.625 400H987.5v531.25h-96.875zM1171.88 496.875h-43.75V931.25h-96.875V400h237.5v434.375h46.875V400h96.875v531.25H1171.88V496.875z"
                stroke="#fff"
                strokeWidth={5}
                strokeLinecap="square"
                fill="#fff"
              />
            </svg>
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
`;

const HomeButton = styled.div`
  width: 80px;
  margin: 0 auto;
`;

/* const Search = styled.div`
  display: inline-block;
  width: 300px;
`;

const Form = styled.form`
  height: 24px;
`;

const Input = styled.input`
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
 */
