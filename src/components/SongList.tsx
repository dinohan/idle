import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { SongType, StateType } from '../interfaces';
import Song from './Song';

interface SongListProps {
  songList: Array<SongType>;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function SongList({ songList }: SongListProps) {
  return (
    <div>
      {songList.map((song) => (
        <Song song={song} />
      ))}
    </div>
  );
}

function mapStateToProps(state: StateType) {
  return {
    songList: state.playList.songList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openPlayList: () => dispatch(actions.openPlayList()),
    closePlayList: () => dispatch(actions.closePlayList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
