/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { StateType } from '../../interfaces';

export const playList = (state: StateType) => state.playList.songList;
export const preSongIndex = (state: StateType) => state.playList.prePlayed;
export const curSongIndex = (state: StateType) => state.playList.nowPlaying;
