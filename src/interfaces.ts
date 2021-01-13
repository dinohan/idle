export interface SongType {
  name: string;
  youtubeID: string;
  mv: boolean;
}

export interface AlbumType {
  name: string;
  img: string;
  titleSong: string;
  songs: Array<SongType>;
}

export interface StateType {
  isDetailOpened: boolean;
  isPlayListOpened: boolean;
  playList: {
    songList: Array<SongType>;
    nowPlaying: number;
  };
}
