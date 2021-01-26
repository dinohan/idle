import { request, gql } from 'graphql-request';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  ADD_LIST,
  ADD_LIST_ASYNC,
  INIT_ALBUMS,
  INIT_ASYNC,
} from '../actions/ActionTypes';
import { ActionType, AlbumType, SongType } from '../../interfaces';

async function getAlbums() {
  const endpoint =
    'https://ttu9e2u1l2.execute-api.ap-northeast-2.amazonaws.com/default/idleql';

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
  const { albums } = await request(endpoint, query);
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

export async function getSongs(
  albumName: string | unknown,
): Promise<Array<SongType>> {
  const endpoint =
    'https://ttu9e2u1l2.execute-api.ap-northeast-2.amazonaws.com/default/idleql';
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
  const { songs } = await request(endpoint, query, variables);
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
function* getSongsSaga(action: ActionType) {
  try {
    const songs = yield call(() => getSongs(action.payload));
    yield put({
      type: ADD_LIST,
      payload: songs,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export function* fetchSaga(): Generator {
  yield takeEvery(INIT_ASYNC, getAlbumsSaga);
  yield takeEvery(ADD_LIST_ASYNC, getSongsSaga);
}

function* rootSaga(): Generator {
  yield all([fetchSaga()]);
}

export default rootSaga;
