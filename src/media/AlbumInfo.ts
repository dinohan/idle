import { AlbumType } from '../interfaces';

const mini: Array<AlbumType> = [
  {
    name: 'I burn',
    img: 'https://i.imgur.com/MaJtviQ.jpg',
    titleSong: '화(火花)',
    songs: [
      {
        name: '',
        youtubeID: '',
        mv: false,
      },
    ],
  },
  {
    name: 'I trust',
    img: 'https://i.imgur.com/mOXhDp8.jpg',
    titleSong: 'Oh my god',
    songs: [
      {
        name: 'Oh my god',
        youtubeID: 'om3n2ni8luE',
        mv: true,
      },
      {
        name: '사랑해',
        youtubeID: 'TzepUKHa9lg',
        mv: false,
      },
      {
        name: 'Maybe',
        youtubeID: 'k8pEDdNUvzI',
        mv: false,
      },
      {
        name: 'LION',
        youtubeID: '6oanIo_2Z4Q',
        mv: true,
      },
      {
        name: 'Oh my god (English Ver.)',
        youtubeID: 'UR-1Tgx1MeA',
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
        youtubeID: 'MIAtuJ31l98',
        mv: false,
      },
      {
        name: '주세요',
        youtubeID: 'HmUlhIjkPYE',
        mv: false,
      },
      {
        name: 'Blow Your Mind',
        youtubeID: 'Q8RQiYxsQGk',
        mv: false,
      },
    ],
  },
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
];

const single: Array<AlbumType> = [
  {
    name: 'DUMDi DUMDi',
    img: 'https://i.imgur.com/hhbdydl.jpg',
    titleSong: 'DUMDi DUMDi',
    songs: [
      {
        name: '',
        youtubeID: '',
        mv: false,
      },
    ],
  },
  {
    name: "i'M THE TREND",
    img: 'https://i.imgur.com/U4eLuYU.jpg',
    titleSong: "i'M THE TREND",
    songs: [
      {
        name: '',
        youtubeID: '',
        mv: false,
      },
    ],
  },
  {
    name: 'Uh-Oh',
    img: 'https://i.imgur.com/ziT2Zl3.jpg',
    titleSong: 'Uh-Oh',
    songs: [
      {
        name: '',
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

const AlbumInfo = {
  mini,
  single,
};

export default AlbumInfo;

/* format
{
    name: '',
    img: '',
    titleSong: '',
    songs: [
      {
        name: '',
        youtubeID: '',
        mv: true,
      },
    ],
  },

  */
