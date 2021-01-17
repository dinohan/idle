export interface SongType {
  name: string;
  youtubeID: string;
  title: boolean;
  thumbnail: string;
  album: string;
}

export interface AlbumType {
  name: string;
  img: string;
  type: string;
  release: {
    year: string;
    month: string;
    date: string;
  };
}

export interface AlbumsType {
  mini: Array<AlbumType>;
  single: Array<AlbumType>;
}

export interface StateType {
  cache: {
    albums: AlbumsType;
  };
  detail: {
    album: AlbumType;
  };
  playList: {
    songList: Array<SongType>;
    nowPlaying: number;
  };
}

export interface ActionType {
  type: string;
  payload?: unknown;
}
