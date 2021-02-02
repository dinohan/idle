import { createReducer } from '@reduxjs/toolkit';
import {
  INIT_ALBUMS,
  SET_DETAIL,
  ADD_LIST,
  ADD_SONG,
  NEXT_SONG,
  PRE_SONG,
  JUMP_SONG,
  DEL_SONG,
  SET_COLOR,
  FIRST_ADD,
} from '../actions/ActionTypes';
import { StateType } from '../../interfaces';

const initialState: StateType = {
  backgroundColor: [
    { r: 94, g: 13, b: 139 },
    { r: 235, g: 0, b: 41 },
  ],
  cache: {
    albums: {
      mini: [],
      single: [],
      part: [],
    },
  },
  detail: {
    album: {
      name: '',
      img: '',
      type: '',
      release: {
        year: '',
        month: '',
        date: '',
      },
    },
  },
  playList: {
    songList: [],
    nowPlaying: 0,
    prePlayed: null,
  },
};

const reducer = createReducer(initialState, {
  [INIT_ALBUMS]: (state: StateType, action) => ({
    ...state,
    cache: {
      ...state.cache,
      albums: action.payload,
    },
  }),
  [SET_COLOR]: (state: StateType, action) => ({
    ...state,
    backgroundColor: action.payload,
  }),
  [SET_DETAIL]: (state: StateType, action) => ({
    ...state,
    detail: {
      ...state.detail,
      album: action.payload,
    },
  }),
  [ADD_LIST]: (state: StateType, action) => ({
    ...state,
    playList: {
      ...state.playList,
      songList: [...state.playList.songList, ...action.payload],
    },
  }),
  [ADD_SONG]: (state: StateType, action) => ({
    ...state,
    playList: {
      ...state.playList,
      songList: [...state.playList.songList, action.payload],
    },
  }),
  [FIRST_ADD]: (state: StateType) => ({
    ...state,
    playList: {
      ...state.playList,
      prePlayed: 0,
    },
  }),
  [NEXT_SONG]: (state: StateType) => {
    let newIndex = state.playList.nowPlaying + 1;
    if (newIndex >= state.playList.songList.length) {
      newIndex = 0;
    }
    return {
      ...state,
      playList: {
        ...state.playList,
        nowPlaying: newIndex,
        prePlayed: state.playList.nowPlaying,
      },
    };
  },
  [PRE_SONG]: (state: StateType) => {
    let newIndex = state.playList.nowPlaying - 1;
    if (newIndex < 0) {
      newIndex = state.playList.songList.length - 1;
    }
    return {
      ...state,
      playList: {
        ...state.playList,
        nowPlaying: newIndex,
        prePlayed: state.playList.nowPlaying,
      },
    };
  },
  [DEL_SONG]: (state: StateType, action) => {
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
        prePlayed: state.playList.nowPlaying,
      },
    };
  },
  [JUMP_SONG]: (state: StateType, action) => ({
    ...state,
    playList: {
      ...state.playList,
      nowPlaying: action.payload,
      prePlayed: state.playList.nowPlaying,
    },
  }),
});

export default reducer;
