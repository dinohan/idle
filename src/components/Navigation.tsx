import React from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Navigation() {
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
      </Nav>
      {/* <PlaceHolder /> */}
    </>
  );
}

export default Navigation;

const Nav = styled.div`
  z-index: 50;
  position: relative;
  width: 100%;
  height: 60px;
`;

const HomeButton = styled.div`
  z-index: 99;
  width: 80px;
  margin: 0 auto;
`;
