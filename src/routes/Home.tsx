import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { AlbumsType, AlbumType, StateType } from '../interfaces';
import actions from '../modules/actions';
import AlbumLine from '../components/AlbumLine';

interface HomeProps {
  cachedAlbums: AlbumsType;
  // initAlbums;
  initAsync;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Home({ cachedAlbums, initAsync }: HomeProps) {
  const [mini, setMini] = useState<Array<AlbumType>>([]);
  const [single, setSingle] = useState<Array<AlbumType>>([]);
  const [part, setPart] = useState<Array<AlbumType>>([]);

  useEffect(() => {
    if (cachedAlbums.mini.length && cachedAlbums.single.length) {
      setMini(cachedAlbums.mini);
      setSingle(cachedAlbums.single);
      setPart(cachedAlbums.part);
    } else initAsync();
  }, [cachedAlbums, initAsync]);

  return (
    <Container>
      <TopHolder />
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
    initAsync: () => dispath(actions.initAsync()),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(Home);

const Container = styled.div``;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopHolder = styled.div`
  height: 30px;
`;
const PlaceHoler = styled.div`
  height: 100px;
`;
