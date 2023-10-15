import React from 'react'
import { tracks } from "../../tracks";

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
