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
}

export interface StateType {
  isDetailOpened: boolean;
  isPlayListOpened: boolean;
  playList: {
    songList: Array<SongType>;
    nowPlaying: number;
  };
}

export interface ActionType {
  type: string;
  payload?: unknown;
}
