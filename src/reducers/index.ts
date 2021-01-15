import { createReducer } from '@reduxjs/toolkit';
import {
  OPEN_PLAYLIST,
  CLOSE_PLAYLIST,
  ADD_LIST,
  NEXT_SONG,
  PRE_SONG,
  JUMP_SONG,
  DEL_SONG,
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
  [PRE_SONG]: (state) => {
    let newIndex = state.playList.nowPlaying - 1;
    if (newIndex < 0) {
      newIndex = state.playList.songList.length - 1;
    }
    return {
      ...state,
      playList: { ...state.playList, nowPlaying: newIndex },
    };
  },
  [DEL_SONG]: (state, action) => {
    const newList = [...state.playList.songList];
    newList.splice(action.payload, 1);
    let newIndex = state.playList.nowPlaying;
    if (action.payload < state.playList.nowPlaying) newIndex -= 1;
    return {
      ...state,
      playList: {
        ...state.playList,
        songList: newList,
        nowPlaying: newIndex,
      },
    };
  },
  [JUMP_SONG]: (state, action) => ({
    ...state,
    playList: {
      ...state.playList,
      nowPlaying: action.payload,
    },
  }),
});

export default reducer;
