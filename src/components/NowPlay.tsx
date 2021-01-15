import styled from '@emotion/styled';
import React from 'react';
import { SongType } from '../interfaces';

interface SongProps {
  song: SongType;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function NowPlay({ song }: SongProps) {
  return (
    <Container>
      <Thumbnail src={song.thumbnail} />
      <TitleBox>
        <MainTitle>{song.name}</MainTitle>
        <SubTitle>{song.album && song.album}</SubTitle>
      </TitleBox>
      <div />
    </Container>
  );
}

export default NowPlay;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 50px;
  border-radius: 5px;
`;

const TitleBox = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MainTitle = styled.div`
  color: #ddd;
  font-size: 1.2em;
`;
const SubTitle = styled.div`
  font-weight: lighter;
  color: #aaa;
`;
