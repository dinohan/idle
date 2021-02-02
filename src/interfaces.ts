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
  part: Array<AlbumType>;
}

export interface ColorType {
  r: number;
  g: number;
  b: number;
}
export interface StateType {
  backgroundColor: Array<ColorType>;
  cache: {
    albums: AlbumsType;
  };
  detail: {
    album: AlbumType;
  };
  playList: {
    songList: Array<SongType>;
    nowPlaying: number;
    prePlayed: number | null;
  };
}

export interface ActionType {
  type: string;
  payload?: unknown;
}
