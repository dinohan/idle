import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';
import { connect } from 'react-redux';

import { AlbumsType, AlbumType, StateType } from '../interfaces';
import actions from '../actions';
import AlbumLine from '../components/AlbumLine';

interface HomeProps {
  cachedAlbums: AlbumsType;
  initAlbums;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Home({ cachedAlbums, initAlbums }: HomeProps) {
  // const { mini, single } = AlbumInfo;
  const [mini, setMini] = useState<Array<AlbumType>>([]);
  const [single, setSingle] = useState<Array<AlbumType>>([]);
  const [part, setPart] = useState<Array<AlbumType>>([]);

  async function getAlbums() {
    const endpoint =
      'https://ttu9e2u1l2.execute-api.ap-northeast-2.amazonaws.com/default/idleql';

    const query = gql`
      query {
        albums {
          name
          img
          type
          release {
            year
            month
            date
          }
        }
      }
    `;

    // const data = await axios.post();

    const data = await request(endpoint, query);
    return data.albums;
  }

  function separate(fetchedAlbums: Array<AlbumType>): AlbumsType {
    const miniAlbums: Array<AlbumType> = fetchedAlbums.filter(
      (album) => album.type === 'mini',
    );
    const singleAlbums: Array<AlbumType> = fetchedAlbums.filter(
      (album) => album.type === 'single',
    );
    const partAlbums: Array<AlbumType> = fetchedAlbums.filter(
      (album) => album.type === 'part',
    );
    setMini(miniAlbums);
    setSingle(singleAlbums);
    setPart(partAlbums);
    return { mini: miniAlbums, single: singleAlbums, part: partAlbums };
  }

  useEffect(() => {
    if (cachedAlbums.mini.length && cachedAlbums.single.length) {
      setMini(cachedAlbums.mini);
      setSingle(cachedAlbums.single);
      setPart(cachedAlbums.part);
    } else getAlbums().then(separate).then(initAlbums);
  }, [cachedAlbums, initAlbums]);

  return (
    <Container>
      <TopHoler />
      <Center>
        <AlbumLine title="미니 앨범" albums={mini} />
        <AlbumLine title="싱글 앨범" albums={single} />
        <AlbumLine title="참여 음반" albums={part} />
      </Center>
      <PlaceHoler />
    </Container>
  );
}

function mapStateToProps(state: StateType) {
  return {
    cachedAlbums: state.cache.albums,
  };
}

function mapDispathToProps(dispath) {
  return {
    initAlbums: (albums) => dispath(actions.initAlbums(albums)),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(Home);

const Container = styled.div``;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopHoler = styled.div`
  height: 30px;
`;
const PlaceHoler = styled.div`
  height: 100px;
`;
