import { ActionType, SongType } from '../interfaces';
import * as types from './ActionTypes';

function addList(songList: Array<SongType>): ActionType {
  return {
    type: types.ADD_LIST,
    payload: songList,
  };
}

function openPlayList(): ActionType {
  return {
    type: types.OPEN_PLAYLIST,
  };
}

function closePlayList(): ActionType {
  return {
    type: types.CLOSE_PLAYLIST,
  };
}

function nextSong(): ActionType {
  return {
    type: types.NEXT_SONG,
  };
}

const actions = {
  openPlayList,
  closePlayList,
  addList,
  nextSong,
};

export default actions;
