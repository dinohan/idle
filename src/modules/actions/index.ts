import { ActionType, AlbumsType, AlbumType, SongType } from '../../interfaces';
import * as types from './ActionTypes';

function initAlbums(albums: AlbumsType): ActionType {
  return {
    type: types.INIT_ALBUMS,
    payload: albums,
  };
}
function initAsync(): ActionType {
  return {
    type: types.INIT_ASYNC,
  };
}

function setDetail(album: AlbumType): ActionType {
  return {
    type: types.SET_DETAIL,
    payload: album,
  };
}

function addListAsync(albumName: string): ActionType {
  return {
    type: types.ADD_LIST_ASYNC,
    payload: albumName,
  };
}
function addList(songList: Array<SongType>): ActionType {
  return {
    type: types.ADD_LIST,
    payload: songList,
  };
}
function addSong(song: SongType): ActionType {
  return {
    type: types.ADD_SONG,
    payload: song,
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
  initAlbums,
  initAsync,
  setDetail,
  addListAsync,
  addList,
  addSong,
  previousSong,
  nextSong,
  deleteSong,
  jumpSong,
};

export default actions;
