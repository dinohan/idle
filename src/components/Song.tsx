import React from 'react';
import { SongType } from '../interfaces';

interface SongProps {
  song: SongType;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Song({ song }: SongProps) {
  return <div>{song.name}</div>;
}

export default Song;
