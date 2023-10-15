import React from 'react'

import React from 'react';
import { tracks } from '../';

export const TrackList = () => {
  return (
    <div>
      {tracks.map((track, index) => (
        <a key={index} href={track.src}>
          {track.title}
        </a>
      ))}
    </div>
  );
};
