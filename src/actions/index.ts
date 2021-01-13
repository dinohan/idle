/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SongType } from '../interfaces';
import * as types from './ActionTypes';

const addList = (songList: Array<SongType>) => ({
  type: types.ADD_LIST,
  payload: songList,
});

const openPlayList = () => ({
  type: types.OPEN_PLAYLIST,
});

const closePlayList = () => ({
  type: types.CLOSE_PLAYLIST,
});

const actions = {
  openPlayList,
  closePlayList,
  addList,
};

export default actions;
