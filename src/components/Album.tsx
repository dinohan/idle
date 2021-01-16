import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import axios from 'axios';
import { gql, request } from 'graphql-request';

import { AlbumType, SongType } from '../interfaces';
import actions from '../actions';

interface AlbumProps {
  album: AlbumType;
  addList;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Album({ album, addList }: AlbumProps) {
  async function getSongs() {
    const endpoint = 'http://localhost:4000/';
    const query = gql`
      query getSongs($album: String!) {
        songs(album: $album) {
          name
          youtubeID
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

  const handleClick = () => {
    getSongs().then(addList);
  };

  return (
    <Item onClick={handleClick}>
      <AlbumImg src={album.img} alt={`${album.name}의 앨범 표지`} />
      <Bottom>
        <TitleBox>
          <Title>{album.name}</Title>
        </TitleBox>
      </Bottom>
    </Item>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addList: (songs) => dispatch(actions.addList(songs)),
  };
}

export default connect(null, mapDispatchToProps)(Album);

const Item = styled.div`
  width: 40%;
  max-width: 200px;
  min-width: 120px;
  display: inline-block;
  padding: 10px;

  //background-color: gray;
  //border: 1px solid gray;
  border-radius: 3px;

  margin-left: 25px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    margin-left: 20px;
  }
  @media all and (max-width: 479px) {
    margin-left: 15px;
  }
`;

const AlbumImg = styled.img`
  width: 100%;
  border-radius: 3px;
`;

const Bottom = styled.div``;

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
