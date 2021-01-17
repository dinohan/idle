import styled from '@emotion/styled';
import React from 'react';
import { AlbumType } from '../interfaces';
import Album from './Album';

interface AlbumLineProps {
  title: string;
  albums: Array<AlbumType>;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function AlbumLine({ title, albums }: AlbumLineProps) {
  return (
    <Container>
      <H1>{title}</H1>
      <Line>
        <Left />
        <Albums>
          {albums.map((album: AlbumType) => (
            <Album key={album.name} album={album} />
          ))}
        </Albums>
        <Right />
      </Line>
    </Container>
  );
}

export default AlbumLine;

const Container = styled.div`
  //margin-top: 15px;
  background-color: none;
  padding: 15px 0;
  width: 100%;
  max-width: 1000px;
`;

const H1 = styled.h1`
  margin-left: 30px;
  margin-bottom: 0px;
  font-size: 1.6em;
`;

const Line = styled.div`
  display: flex;
  align-items: stretch;
  //height: 280px;
`;
const Left = styled.div`
  z-index: 1;
  width: 20px;
  background-color: #fafafa;
  box-shadow: 8px 0 8px 8px #fafafa;
`;
const Right = styled.div`
  z-index: 1;
  width: 20px;
  background-color: #fafafa;
  box-shadow: -8px 0 8px 8px #fafafa;
`;
const Albums = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  padding: 10px 30px 10px 0;
`;
