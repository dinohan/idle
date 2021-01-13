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
