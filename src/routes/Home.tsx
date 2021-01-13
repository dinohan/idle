import styled from '@emotion/styled';
import React from 'react';
import Album from '../components/Album';
import { AlbumType } from '../interfaces';
import AlbumInfo from '../media/AlbumInfo';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Home() {
  const { mini, single } = AlbumInfo;
  return (
    <HomeBody>
      <h1>미니 앨범</h1>
      <Albums>
        <ul>
          {mini.map((album: AlbumType) => (
            <Album album={album} />
          ))}
        </ul>
      </Albums>
    </HomeBody>
  );
}

export default Home;

const HomeBody = styled.div`
  height: 5000px;
`;

const Albums = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
`;
