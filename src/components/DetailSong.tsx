import styled from '@emotion/styled';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiPlus } from 'react-icons/hi';
import { connect } from 'react-redux';
import { useAlert } from 'react-alert';

import actions from '../modules/actions';
import { SongType } from '../interfaces';

interface DetailSongProps {
  song: SongType;
  index: number;
  addSong;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function DetailSong({ song, index, addSong }: DetailSongProps) {
  const alert = useAlert();

  const handleClick = () => {
    alert.success(`'${song.name}' 추가됨`);
    addSong(song);
  };

  return (
    <Container>
      <Star>{song.title && <AiFillStar size="0.8em" />}</Star>
      <Index>{index + 1}</Index>
      <Title>{song.name}</Title>
      <Button onClick={handleClick}>
        <HiPlus size="1.3em" />
      </Button>
    </Container>
  );
}

function mapDispathToProps(dispatch) {
  return {
    addSong: (songs) => dispatch(actions.addSong(songs)),
  };
}

export default connect(null, mapDispathToProps)(DetailSong);

const Container = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;
const Star = styled.div`
  width: 30px;
  display: flex;
  justify-content: center;
  color: #888;
`;
const Index = styled.div`
  width: 30px;
  text-align: center;
  color: #aaa;
`;
const Title = styled.div`
  width: 100%;
  padding-left: 5px;
  padding-bottom: 1px;
  font-size: 1.2em;
`;
const Button = styled.div`
  margin-left: auto;
  margin-right: 10px;
  padding: 5px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  color: #7e00bf;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
