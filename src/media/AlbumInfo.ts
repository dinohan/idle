import { AlbumType } from '../interfaces';

const mini: Array<AlbumType> = [
  {
    name: 'I am',
    img: 'https://i.imgur.com/BAwiwGw.jpg',
    titleSong: 'LATATA',
    songs: [
      {
        name: 'LATATA',
        youtubeID: '9mQk7Evt6Vs',
        mv: true,
      },
      {
        name: '달라 ($$$)',
        youtubeID: 'sTnQ24z9hIw',
        mv: false,
      },
      {
        name: 'MAZE',
        youtubeID: 'klKKrmRY2R8',
        mv: false,
      },
      {
        name: "DON'T TEXT ME",
        youtubeID: '9qXLfXLluQI',
        mv: false,
      },
      {
        name: '알고 싶어',
        youtubeID: 'ehXwFRCvTa8',
        mv: false,
      },
      {
        name: '들어줘요',
        youtubeID: 'OVivuUWG9Qs',
        mv: false,
      },
    ],
  },
  {
    name: 'I made',
    img: 'https://i.imgur.com/x3VwXP6.jpg',
    titleSong: 'Senorita',
    songs: [
      {
        name: 'Senorita',
        youtubeID: 'G8APgeFfkAk',
        mv: true,
      },
      {
        name: "What's Your Name",
        youtubeID: 'v8zTRXCgF1Y',
        mv: false,
      },
      {
        name: '싫다고 말해',
        youtubeID: '',
        mv: false,
      },
      {
        name: '주세요',
        youtubeID: '',
        mv: false,
      },
      {
        name: 'Blow Your Mind',
        youtubeID: '',
        mv: false,
      },
    ],
  },
  {
    name: '한(一)',
    img: 'https://i.imgur.com/6ISk4m2.jpg',
    titleSong: '한(一)',
    songs: [
      {
        name: '한(一)',
        youtubeID: '',
        mv: true,
      },
    ],
  },
];

const single: Array<AlbumType> = [
  {
    name: '한(一)',
    img: 'https://i.imgur.com/6ISk4m2.jpg',
    titleSong: '한(一)',
    songs: [
      {
        name: '한(一)',
        youtubeID: '',
        mv: true,
      },
    ],
  },
];

const AlbumInfo = {
  mini,
  single,
};

export default AlbumInfo;
