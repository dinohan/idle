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
} from '../actions/ActionTypes';
import { StateType } from '../../interfaces';

const initialState: StateType = {
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
      },
    };
  },
  [JUMP_SONG]: (state: StateType, action) => ({
    ...state,
    playList: {
      ...state.playList,
      nowPlaying: action.payload,
    },
  }),
});

export default reducer;
