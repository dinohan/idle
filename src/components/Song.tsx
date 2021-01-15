import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';

import { SongType } from '../interfaces';
import actions from '../actions';

interface SongProps {
  song: SongType;
  index: number;
  jumpSong;
  deleteSong;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Song({ song, index, jumpSong, deleteSong }: SongProps) {
  const handleClick = () => {
    deleteSong(index);
  };

  const background = useRef<HTMLLIElement>(null);
  const deleteButton = useRef<HTMLDivElement>(null);

  const handleClickOutside = ({ target }: MouseEvent) => {
    if (deleteButton.current && background.current)
      if (
        !deleteButton.current.contains(target as Node) &&
        background.current.contains(target as Node)
      ) {
        jumpSong(index);
      }
  };
  let moved;
  const downListener = () => {
    moved = false;
  };
  const moveListener = () => {
    moved = true;
  };
  const upListener = (event: MouseEvent) => {
    if (!moved) {
      handleClickOutside(event);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', downListener);
    window.addEventListener('mousemove', moveListener);
    window.addEventListener('mouseup', upListener);

    // window.addEventListener('click', handleClickOutside);
    return () => {
      // window.removeEventListener('click', handleClickOutside);

      window.removeEventListener('mousedown', downListener);
      window.removeEventListener('mousemove', moveListener);
      window.removeEventListener('mouseup', upListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container ref={background}>
      <Thumbnail src={song.thumbnail} />
      <TitleBox>
        <MainTitle>{song.name}</MainTitle>
        <SubTitle>{song.album && song.album}</SubTitle>
      </TitleBox>
      <DeleteButton onClick={handleClick} ref={deleteButton}>
        <FiTrash2 size="1.2em" color="white" />
      </DeleteButton>
    </Container>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    jumpSong: (index) => dispatch(actions.jumpSong(index)),
    deleteSong: (index) => dispatch(actions.deleteSong(index)),
  };
}

export default connect(null, mapDispatchToProps)(Song);

const Container = styled.li`
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Thumbnail = styled.img`
  width: 50px;
  border-radius: 4px;
`;

const TitleBox = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MainTitle = styled.div`
  color: #ddd;
  font-size: 1em;
`;
const SubTitle = styled.div`
  font-weight: lighter;
  color: #aaa;
  font-size: 0.9em;
`;

const DeleteButton = styled.div`
  margin-left: auto;
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
`;
