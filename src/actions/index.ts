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

function previousSong(): ActionType {
  return {
    type: types.PRE_SONG,
  };
}
function nextSong(): ActionType {
  return {
    type: types.NEXT_SONG,
  };
}
function jumpSong(index: number): ActionType {
  return {
    type: types.JUMP_SONG,
    payload: index,
  };
}

function deleteSong(index: number): ActionType {
  return {
    type: types.DEL_SONG,
    payload: index,
  };
}

const actions = {
  openPlayList,
  closePlayList,
  addList,
  previousSong,
  nextSong,
  deleteSong,
  jumpSong,
};

export default actions;
