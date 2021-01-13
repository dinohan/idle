import React from 'react';
import styled from '@emotion/styled';

import { AlbumType } from '../interfaces';

interface AlbumProps {
  album: AlbumType;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Album({ album }: AlbumProps) {
  return (
    <Item>
      <AlbumImg src={album.img} alt={`${album.name}의 앨범 표지`} />
      <h2>{album.name}</h2>
    </Item>
  );
}

export default Album;

const Item = styled.li`
  width: 40%;
  display: inline-block;
  margin-left: 10px;
`;

const AlbumImg = styled.img`
  width: 100%;
`;
