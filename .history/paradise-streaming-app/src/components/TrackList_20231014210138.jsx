import React from 'react'

import React from 'react';
import { tracks } from './tracks';

export const TrackList = () => {
  return (
    <div>
      {tracks.map((track, index) => (
        <a key={index} href={track.link}>
          {track.title}
        </a>
      ))}
    </div>
  );
};
