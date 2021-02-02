import {
  ActionType,
  AlbumsType,
  AlbumType,
  ColorType,
  SongType,
} from '../../interfaces';
import * as types from './ActionTypes';

const initAlbums = (albums: AlbumsType): ActionType => ({
  type: types.INIT_ALBUMS,
  payload: albums,
});
const initAsync = (): ActionType => ({
  type: types.INIT_ASYNC,
});
const initDetail = (albumName: string): ActionType => ({
  type: types.INIT_DETAIL,
  payload: albumName,
});

const setColor = (colors: Array<ColorType>): ActionType => ({
  type: types.SET_COLOR,
  payload: colors,
});

const setDetail = (album: AlbumType): ActionType => ({
  type: types.SET_DETAIL,
  payload: album,
});

const addListAsync = (
  albumName: string,
  success: (songs: Array<SongType>) => void,
): ActionType => ({
  type: types.ADD_LIST_ASYNC,
  payload: { albumName, success },
});
const addList = (songList: Array<SongType>): ActionType => ({
  type: types.ADD_LIST,
  payload: songList,
});
const addSong = (song: SongType): ActionType => ({
  type: types.ADD_SONG,
  payload: song,
});

const previousSong = (): ActionType => ({
  type: types.PRE_SONG,
});
const nextSong = (): ActionType => ({
  type: types.NEXT_SONG,
});
const jumpSong = (index: number): ActionType => ({
  type: types.JUMP_SONG,
  payload: index,
});
const deleteSong = (index: number): ActionType => ({
  type: types.DEL_SONG,
  payload: index,
});

const actions = {
  initAlbums,
  initAsync,
  initDetail,
  setColor,
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
