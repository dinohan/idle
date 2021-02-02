import { request, gql } from 'graphql-request';
import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import {
  ADD_LIST,
  ADD_LIST_ASYNC,
  ADD_SONG,
  DEL_SONG,
  FIRST_ADD,
  INIT_ALBUMS,
  INIT_ASYNC,
  INIT_DETAIL,
  JUMP_SONG,
  NEXT_SONG,
  PRE_SONG,
  SET_COLOR,
  SET_DETAIL,
} from '../actions/ActionTypes';
import { ActionType, AlbumType, SongType } from '../../interfaces';
import { END_POINT } from '../../config';
import * as selectors from './selectors';

async function getAlbums() {
  const query = gql`
    query {
      albums {
        name
        img
        type
        release {
          year
          month
          date
        }
      }
    }
  `;
  const { albums } = await request(END_POINT, query);
  const mini: Array<AlbumType> = albums.filter(
    (album: AlbumType) => album.type === 'mini',
  );
  const single: Array<AlbumType> = albums.filter(
    (album: AlbumType) => album.type === 'single',
  );
  const part: Array<AlbumType> = albums.filter(
    (album: AlbumType) => album.type === 'part',
  );
  return { mini, single, part };
}

async function getAlbum(albumName: string | unknown) {
  const query = gql`
    query($albumName: String!) {
      album(albumName: $albumName) {
        name
        img
        type
        release {
          year
          month
          date
        }
      }
    }
  `;
  const variables = {
    albumName,
  };
  const { album } = await request(END_POINT, query, variables);
  return album;
}
async function getColor(albumName: string | unknown) {
  const query = gql`
    query($albumName: String!) {
      album(albumName: $albumName) {
        colors {
          r
          g
          b
        }
      }
    }
  `;
  const variables = {
    albumName,
  };
  const { album } = await request(END_POINT, query, variables);
  return album.colors;
}

export async function getSongs(
  albumName: string | unknown,
): Promise<Array<SongType>> {
  const query = gql`
    query getSongs($album: String!) {
      songs(album: $album) {
        name
        youtubeID
        title
        thumbnail
        album
      }
    }
  `;
  const variables = {
    album: albumName,
  };
  const { songs } = await request(END_POINT, query, variables);
  return songs;
}

function* getAlbumsSaga() {
  try {
    const albums = yield call(getAlbums);
    yield put({
      type: INIT_ALBUMS,
      payload: albums,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}
function* getAlbumSaga(action: ActionType) {
  try {
    const album = yield call(() => getAlbum(action.payload));
    yield put({
      type: SET_DETAIL,
      payload: album,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function* getSongsSaga(action) {
  try {
    const songs = yield call(() => getSongs(action.payload.albumName));
    action.payload.success(songs);
    yield put({
      type: ADD_LIST,
      payload: songs,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}
function* getColorSaga(action: ActionType) {
  try {
    const playList: Array<SongType> = yield select(selectors.playList);
    const preSongIndex = yield select(selectors.preSongIndex);
    const curSongIndex = yield select(selectors.curSongIndex);
    if (action.type === ADD_LIST || action.type === ADD_SONG) {
      if (preSongIndex !== null) return;
      yield put({
        type: FIRST_ADD,
      });
    } else if (playList[preSongIndex].album === playList[curSongIndex].album)
      return;

    const colors = yield call(() => getColor(playList[curSongIndex].album));
    yield put({
      type: SET_COLOR,
      payload: colors,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

export function* fetchSaga(): Generator {
  yield takeEvery(INIT_ASYNC, getAlbumsSaga);
  yield takeEvery(ADD_LIST_ASYNC, getSongsSaga);
  yield takeEvery(INIT_DETAIL, getAlbumSaga);

  yield takeEvery(NEXT_SONG, getColorSaga);
  yield takeEvery(PRE_SONG, getColorSaga);
  yield takeEvery(JUMP_SONG, getColorSaga);
  yield takeEvery(DEL_SONG, getColorSaga);
  yield takeEvery(ADD_LIST, getColorSaga);
  yield takeEvery(ADD_SONG, getColorSaga);
}

function* rootSaga(): Generator {
  yield all([fetchSaga()]);
}

export default rootSaga;
