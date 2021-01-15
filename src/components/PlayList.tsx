/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import YouTube, { Options } from 'react-youtube';

import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { FaPause, FaPlay, FaBackward, FaForward } from 'react-icons/fa';
import { SongType, StateType } from '../interfaces';
import actions from '../actions';
import SongList from './SongList';

interface PlayListProps {
  nowPlayingSong: SongType;
  isOpened: boolean;
  openPlayList;
  closePlayList;
  previousSong;
  nextSong;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function PlayList({
  nowPlayingSong,
  isOpened,
  openPlayList,
  closePlayList,
  previousSong,
  nextSong,
}: PlayListProps) {
  const [youtubeID, setYoutubeID] = useState('');
  const [player, setPlayer] = useState({
    playVideo: () => null,
    pauseVideo: () => null,
  });
  const [isPlaying, setPlaying] = useState(false);
  const opts: Options = {
    height: '233',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const resume = () => {
    player.playVideo();
  };
  const pause = () => {
    player.pauseVideo();
  };
  const onReady = (event) => {
    setPlayer(event.target);
  };

  const setPlayingPlay = () => {
    setPlaying(true);
  };
  const setPlayingPause = () => {
    setPlaying(false);
  };

  useEffect(() => {
    if (nowPlayingSong) {
      if (nowPlayingSong.youtubeID) {
        setYoutubeID(nowPlayingSong.youtubeID);
        resume();
      } else nextSong();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlayingSong]);

  const handleClick = () => {
    if (isOpened) closePlayList();
    else openPlayList();
  };

  const videoEnded = () => {
    nextSong();
  };

  return (
    <Container>
      <Header>
        <SongTitle>{nowPlayingSong && nowPlayingSong.name}</SongTitle>
        {isOpened || (
          <Controler>
            <FaBackward cursor="pointer" size="25" onClick={previousSong} />
            {isPlaying ? (
              <FaPause size="25" cursor="pointer" onClick={pause} />
            ) : (
              <FaPlay size="25" cursor="pointer" onClick={resume} />
            )}
            <FaForward size="25" cursor="pointer" onClick={nextSong} />
          </Controler>
        )}
        <SizeButton onClick={handleClick}>
          {isOpened ? <FiChevronDown size="35" /> : <FiChevronUp size="35" />}
        </SizeButton>
      </Header>
      <Body style={isOpened ? { display: 'block' } : { display: 'none' }}>
        <InnerBox>
          {youtubeID && (
            <YoutubeBox>
              <YouTube
                videoId={youtubeID}
                onReady={onReady}
                onPlay={setPlayingPlay}
                onPause={setPlayingPause}
                onEnd={videoEnded}
                opts={opts}
              />
            </YoutubeBox>
          )}
          <SongList />
          {isOpened && (
            <ControlBox>
              <FaBackward cursor="pointer" size="25" onClick={previousSong} />
              {isPlaying ? (
                <FaPause size="25" cursor="pointer" onClick={pause} />
              ) : (
                <FaPlay size="25" cursor="pointer" onClick={resume} />
              )}
              <FaForward size="25" cursor="pointer" onClick={nextSong} />
            </ControlBox>
          )}
        </InnerBox>
      </Body>
    </Container>
  );
}

function mapStateToProps(state: StateType) {
  return {
    nowPlayingSong: state.playList.songList[state.playList.nowPlaying],
    isOpened: state.isPlayListOpened,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openPlayList: () => dispatch(actions.openPlayList()),
    closePlayList: () => dispatch(actions.closePlayList()),
    previousSong: () => dispatch(actions.previousSong()),
    nextSong: () => dispatch(actions.nextSong()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-content: center;
  z-index: 5;

  width: 450px;
  bottom: 0px;
  right: 15px;
  background-color: #7e00bf;

  padding: 8px;
  padding-top: 0;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);

  /* PC (해상도 1024px ~ )*/
  @media all and (min-width: 1024px) {
    /*스타일입력*/
  }

  /* 테블릿 가로, (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    /*스타일입력*/
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    /*스타일입력*/
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 95%;
  }
`;

const Header = styled.div`
  width: 100%;
  padding: 8px 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ddd;
`;

const SongTitle = styled.div`
  width: 40%;
  padding: 5px;
  font-weight: bold;
  font-size: 1.2em;
`;

const Controler = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  color: #ddd;
  & > * {
    margin: 0 10px;
  }
`;

const SizeButton = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const Body = styled.div`
  display: none;
`;

const InnerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;

  padding: 10px;
  padding-top: 10px;

  background-color: #49008d;
  border-radius: 10px;
`;

const YoutubeBox = styled.div`
  width: 100%;
  height: 243px;
  box-shadow: 0 10px 10px 5px #49008d;
  z-index: 6;
`;

/* const Separate = styled.div`
  width: 100%;
  //height: 15px;
  z-index: 6;
  box-shadow: 0 10px 10px 5px #49008d;

  padding: 20px 10px 0 10px;
  font-weight: bold;
  font-size: 1.2em;
  color: #ddd;
`; */

const ControlBox = styled.div`
  padding: 10px 0;
  color: #ddd;
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 6;
  & > * {
    //margin: 0 20px;
  }

  box-shadow: 0 -10px 10px 5px #49008d;
`;
