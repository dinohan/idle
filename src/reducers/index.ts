import { createReducer } from '@reduxjs/toolkit';
import {
  OPEN_PLAYLIST,
  CLOSE_PLAYLIST,
  ADD_LIST,
} from '../actions/ActionTypes';
import PlayList from '../components/PlayList';
import { StateType } from '../interfaces';

const initialState: StateType = {
  isPlayListOpened: false,
  isDetailOpened: false,
  playList: {
    songList: [
      {
        name: 'Oh my god',
        youtubeID: 'om3n2ni8luE',
        mv: true,
      },
      {
        name: '사랑해',
        youtubeID: 'TzepUKHa9lg',
        mv: false,
      },
      {
        name: 'Maybe',
        youtubeID: 'k8pEDdNUvzI',
        mv: false,
      },
      {
        name: 'LION',
        youtubeID: '6oanIo_2Z4Q',
        mv: true,
      },
      {
        name: 'Oh my god (English Ver.)',
        youtubeID: 'UR-1Tgx1MeA',
        mv: false,
      },
    ],
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
});

export default reducer;
