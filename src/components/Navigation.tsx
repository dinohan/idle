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
`;

const HomeButton = styled.div`
  width: 80px;
  margin: 0 auto;
`;

const Logo = styled.img`
  margin: 0;
  height: 60px;
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
