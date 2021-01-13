import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { SongType, StateType } from '../interfaces';
import actions from '../actions';
import SongList from './SongList';

interface PlayListProps {
  playList: Array<SongType>;
  isOpened: boolean;
  openPlayList;
  closePlayList;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function PlayList({
  playList,
  isOpened,
  openPlayList,
  closePlayList,
}: PlayListProps) {
  const handleClick = () => {
    if (isOpened) closePlayList();
    else openPlayList();
  };
  return (
    <PlayListBody>
      {isOpened ? (
        <Visible>
          <Header onClick={handleClick}>
            <SizeButton>
              <FiChevronDown color="white" size="35" />
            </SizeButton>
          </Header>
          <InnerBox>
            <SongList />
          </InnerBox>
        </Visible>
      ) : (
        <Invisible>
          <Header onClick={handleClick}>
            <SizeButton>
              <FiChevronUp color="white" size="35" />
            </SizeButton>
          </Header>
        </Invisible>
      )}
    </PlayListBody>
  );
}

function mapStateToProps(state: StateType) {
  return {
    playList: state.playList,
    isOpened: state.isPlayListOpened,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openPlayList: () => dispatch(actions.openPlayList()),
    closePlayList: () => dispatch(actions.closePlayList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);

const PlayListBody = styled.div`
  position: fixed;
  z-index: 5;

  width: 350px;
  bottom: 0px;
  right: 20px;

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

const Invisible = styled.div`
  background-color: #7e00bf;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 45px;

  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
`;

const Header = styled.div`
  width: 100%;
  height: 45px;
`;

const Visible = styled.div`
  background-color: #7e00bf;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 300px;
  padding: 10px;
  padding-top: 0px;

  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
`;

const SizeButton = styled.div`
  float: right;
  margin-top: 4px;
  margin-right: 5px;
`;

const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #49008d;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
