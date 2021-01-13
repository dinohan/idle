import styled from '@emotion/styled';
import React from 'react';
import Album from '../components/Album';
import { AlbumType } from '../interfaces';
import AlbumInfo from '../media/AlbumInfo';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Home() {
  const { mini, single } = AlbumInfo;
  return (
    <HomeBody>
      <Section>
        <Center>
          <H1>미니 앨범</H1>
          <Albums>
            {mini.map((album: AlbumType) => (
              <Album album={album} />
            ))}
          </Albums>
        </Center>
      </Section>
      <Section>
        <Center>
          <H1>싱글 앨범</H1>
          <Albums>
            {single.map((album: AlbumType) => (
              <Album album={album} />
            ))}
          </Albums>
        </Center>
      </Section>
      <Section>
        <Center>
          <H1>해외 앨범</H1>
          <Albums>
            {single.map((album: AlbumType) => (
              <Album album={album} />
            ))}
          </Albums>
        </Center>
      </Section>
      <Section>
        <Center>
          <H1>참여 음반</H1>
          <Albums>
            {single.map((album: AlbumType) => (
              <Album album={album} />
            ))}
          </Albums>
        </Center>
      </Section>
    </HomeBody>
  );
}

export default Home;

const HomeBody = styled.div`
  //height: 5000px;
`;

const Albums = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  padding: 10px 0px;
`;

const Section = styled.div`
  margin-top: 15px;
  background-color: #f5f5f6;
  padding: 15px 0px 15px 5px;

  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.3);
`;

const Center = styled.div`
  @media all and (min-width: 900px) {
    margin-left: 10vw;
  }
`;

const H1 = styled.h1`
  margin-left: 30px;
  margin-bottom: 0px;
  font-size: 1.6em;
`;
