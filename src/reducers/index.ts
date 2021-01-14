import { createReducer } from '@reduxjs/toolkit';
import {
  OPEN_PLAYLIST,
  CLOSE_PLAYLIST,
  ADD_LIST,
  NEXT_SONG,
} from '../actions/ActionTypes';
import { StateType } from '../interfaces';

const initialState: StateType = {
  isPlayListOpened: false,
  isDetailOpened: false,
  playList: {
    songList: [],
    nowPlaying: 0,
  },
};

const reducer = createReducer(initialState, {
  [OPEN_PLAYLIST]: (state) => ({
    ...state,
    isPlayListOpened: true,
  }),
  [CLOSE_PLAYLIST]: (state) => ({
    ...state,
    isPlayListOpened: false,
  }),
  [ADD_LIST]: (state, action) => ({
    ...state,
    playList: {
      ...state.playList,
      songList: [...state.playList.songList, ...action.payload],
    },
  }),
  [NEXT_SONG]: (state) => {
    let newIndex = state.playList.nowPlaying + 1;
    if (newIndex >= state.playList.songList.length) {
      newIndex = 0;
    }
    return {
      ...state,
      playList: { ...state.playList, nowPlaying: newIndex },
    };
  },
});

export default reducer;
