import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { gql, request } from 'graphql-request';
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import { useAlert } from 'react-alert';

import { AlbumType } from '../interfaces';
import actions from '../actions';

interface AlbumProps {
  album: AlbumType;
  setDetail;
  addList;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Album({ album, setDetail, addList }: AlbumProps) {
  const alert = useAlert();
  async function getSongs() {
    const endpoint =
      'https://ttu9e2u1l2.execute-api.ap-northeast-2.amazonaws.com/default/idleql';
    const query = gql`
      query getSongs($album: String!) {
        songs(album: $album) {
          name
          youtubeID
          title
          thumbnail
          album
        }
      }
    `;
    const variables = {
      album: album.name,
    };
    const { songs } = await request(endpoint, query, variables);
    return songs;
  }

  const success = (songs) => {
    if (songs.length < 1) return songs;
    const text =
      songs.length > 1
        ? `${songs.length}곡 추가됨`
        : `'${songs[0].name}' 추가됨`;
    alert.success(text);
    return songs;
  };

  const handleClick = () => {
    getSongs().then(success).then(addList);
  };

  const handleDonw = () => {
    setDetail(album);
  };

  return (
    <Container>
      <Link to="/detail">
        <LinkeLayer onMouseDown={handleDonw} />
      </Link>
      <AlbumImg src={album.img} alt={`${album.name}의 앨범 표지`} />
      <Bottom>
        <TitleBox>
          <Title>{album.name}</Title>
        </TitleBox>
        <Plus onClick={handleClick}>
          <HiPlus size="1.3em" />
        </Plus>
      </Bottom>
    </Container>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setDetail: (album) => dispatch(actions.setDetail(album)),
    addList: (songs) => dispatch(actions.addList(songs)),
  };
}

export default connect(null, mapDispatchToProps)(Album);

const Container = styled.div`
  width: 40%;
  max-width: 200px;
  min-width: 120px;
  display: inline-block;
  padding: 10px;
  position: relative;

  //background-color: gray;
  //border: 1px solid gray;

  margin-left: 25px;

  @media all and (min-width: 480px) and (max-width: 767px) {
    margin-left: 20px;
  }
  @media all and (max-width: 479px) {
    margin-left: 15px;
  }
`;

const LinkeLayer = styled.div`
  background-color: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 3px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const AlbumImg = styled.img`
  width: 100%;
  border-radius: 3px;
`;

const Bottom = styled.div`
  display: flex;
`;

const TitleBox = styled.div`
  margin-top: 5px;
  width: 80%;
  font-size: 1.1em;
  overflow: scroll;

  @media all and (max-width: 479px) {
    font-size: 1em;
    width: 100%;
  }
`;

const Title = styled.h2`
  margin-left: 3px;
  font-size: 1em;
`;

const Plus = styled.div`
  margin-left: auto;
  cursor: pointer;
  color: #7e00bf;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 3px;
  //background-color: red;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
