import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';

import { SongType, StateType } from '../interfaces';
import Song from './Song';

const scroll = Scroll.scroller;
const ScrollElement = Scroll.Element;

interface PlaySongListProps {
  songList: Array<SongType>;
  nowPlay: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function PlaySongList({ songList, nowPlay }: PlaySongListProps) {
  const beforeList = songList.slice(0, nowPlay);
  const afterList = songList.slice(nowPlay + 1);

  useEffect(() => {
    scroll.scrollTo('now', {
      containerId: 'container',
      duration: 500,
      smooth: true,
      offset: -15,
    });
  }, [nowPlay]);

  return (
    <ScrollElement
      id="container"
      style={{
        overflow: 'scroll',
        'max-height': '200px',
        margin: '0px 5px 0px 5px',
        'padding-bottom': '20px',
        'padding-top': '15px',
      }}
    >
      <BeforeList>
        {beforeList &&
          beforeList.map((song, index) => (
            <Song
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              song={song}
              index={index}
            />
          ))}
      </BeforeList>
      <ScrollElement name="now">
        <NowPlaySong>
          {songList[nowPlay] && (
            <Song song={songList[nowPlay]} index={nowPlay} />
          )}
        </NowPlaySong>
      </ScrollElement>
      <AfterList>
        {afterList &&
          afterList.map((song, index) => (
            <Song
              // eslint-disable-next-line react/no-array-index-key
              key={nowPlay + index + 1}
              song={song}
              index={nowPlay + index + 1}
            />
          ))}
      </AfterList>
    </ScrollElement>
  );
}

function mapStateToProps(state: StateType) {
  return {
    songList: state.playList.songList,
    nowPlay: state.playList.nowPlaying,
  };
}

export default connect(mapStateToProps)(PlaySongList);

const BeforeList = styled.ul`
  list-style: none;
`;
const NowPlaySong = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
  padding-left: 10px;

  color: #aaa;
`;
const AfterList = styled.ul``;
