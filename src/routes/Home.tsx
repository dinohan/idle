import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';

import Album from '../components/Album';
import { AlbumType } from '../interfaces';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Home() {
  // const { mini, single } = AlbumInfo;
  const [mini, setMini] = useState<Array<AlbumType>>([]);
  const [single, setSingle] = useState<Array<AlbumType>>([]);

  async function getAlbums() {
    const endpoint =
      'https://ttu9e2u1l2.execute-api.ap-northeast-2.amazonaws.com/default/idleql';

    const query = gql`
      query {
        albums {
          name
          img
          type
        }
      }
    `;

    // const data = await axios.post();

    const data = await request(endpoint, query);
    return data.albums;
  }

  function separate(albums: Array<AlbumType>): void {
    setMini(albums.filter((album) => album.type === 'mini'));
    setSingle(albums.filter((album) => album.type === 'single'));
  }

  useEffect(() => {
    getAlbums().then(separate);
  }, []);

  return (
    <Container>
      <Section>
        <Center>
          <H1>미니 앨범</H1>
          <Albums>
            {mini.map((album: AlbumType) => (
              <Album key={album.name} album={album} />
            ))}
          </Albums>
        </Center>
      </Section>
      <Section>
        <Center>
          <H1>싱글 앨범</H1>
          <Albums>
            {single.map((album: AlbumType) => (
              <Album key={album.name} album={album} />
            ))}
          </Albums>
        </Center>
      </Section>
      {/* <Section>
        <Center>
          <H1>해외 앨범</H1>
          <Albums>
            {single.map((album: AlbumType) => (
              <Album key={album.name} album={album} />
            ))}
          </Albums>
        </Center>
      </Section>
      <Section>
        <Center>
          <H1>참여 음반</H1>
          <Albums>
            {single.map((album: AlbumType) => (
              <Album key={album.name} album={album} />
            ))}
          </Albums>
        </Center>
      </Section> */}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  //height: 5000px;
`;

const Albums = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  padding: 10px 30px 10px 0;
`;

const Section = styled.div`
  margin-top: 15px;
  background-color: #f5f5f6;
  padding: 15px 0;
  @media all and (min-width: 900px) {
    display: flex;
    justify-content: center;
  }

  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.4);
`;

const Center = styled.div`
  @media all and (min-width: 900px) {
    //margin-left: 10vw;
  }
`;

const H1 = styled.h1`
  margin-left: 30px;
  margin-bottom: 0px;
  font-size: 1.6em;
`;
