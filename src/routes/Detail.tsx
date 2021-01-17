import styled from '@emotion/styled';
import request, { gql } from 'graphql-request';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import DetailSong from '../components/DetailSong';
import { AlbumType, SongType, StateType } from '../interfaces';

interface DetailProps {
  album: AlbumType;
  addList;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Detail({ album, addList }: DetailProps) {
  const [songList, setSongList] = useState<Array<SongType>>([]);

  const handleClick = () => {
    addList(songList);
  };

  useEffect(() => {
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
    getSongs().then(setSongList);
  }, [album]);

  return (
    <Container>
      <Body>
        <Top>
          <Image>
            <img src={album.img} alt="" />
          </Image>
          <Description>
            <Title>{album.name}</Title>
            <Release>
              {`${album.release.year}${album.release.year && '년'} ${
                album.release.month
              }${album.release.month && '월'} ${album.release.date}${
                album.release.date && '일'
              }`}
            </Release>
            <Button onClick={handleClick}>+ 추가하기</Button>
          </Description>
        </Top>
        <Bottom>
          {songList.map((song, index) => (
            <DetailSong key={song.youtubeID} song={song} index={index} />
          ))}
        </Bottom>
        <Placholder />
      </Body>
    </Container>
  );
}

function mapStateToProps(state: StateType) {
  return {
    album: state.detail.album,
  };
}
function mapDispathToProps(dispatch) {
  return {
    addList: (songs) => dispatch(actions.addList(songs)),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(Detail);

const threshold = '599';

const Container = styled.div`
  width: 100%;
  //height: 100%;
  display: flex;
  justify-content: center;

  background-color: none;
  & * {
    background-color: none;
  }
`;

const Top = styled.div`
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: row;

  @media all and (max-width: ${threshold}px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Bottom = styled.div`
  flex-grow: 2;
  padding: 0 30px;
  @media all and (max-width: ${threshold}px) {
    padding: 0 10px;
  }
`;

const Image = styled.div`
  width: 50%;
  margin: 20px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 100%;
    max-width: 350px;
    border-radius: 3%;
    box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.3);
  }
  @media all and (max-width: ${threshold}px) {
    width: 80%;
    margin: 20px;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media all and (max-width: ${threshold}px) {
    align-items: center;
  }
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 1.8em;
  @media all and (max-width: ${threshold}px) {
    font-size: 1.5em;
  }
  padding-bottom: 5px;
`;
const Release = styled.div``;
const Button = styled.div`
  margin-top: 10px;
  width: 120px;
  text-align: center;
  border: 2px solid #7e00bf;
  border-radius: 5px;
  color: #7e00bf;
  font-weight: bold;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #7e00bf;
    color: white;
  }
`;

const Body = styled.div`
  width: 90%;
  max-width: 850px;
  height: 100%;

  display: flex;
  flex-direction: column;

  @media all and (max-width: ${threshold}px) {
    width: 100%;
  }
`;

const Placholder = styled.div`
  width: 100%;
  height: 100px;
  background-color: none;
`;
