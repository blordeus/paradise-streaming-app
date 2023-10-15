import React from 'react'
import { tracks } from "../../tracks";

export const TrackList = ({currentTrack, audioRef}) => {
  return (
    <div className='flex flex-col'>
      {tracks.map((track, index) => (
        <a key={index} href={track.src} src={currentTrack.src} ref={audioRef}>
          {track.title}
        </a>
      ))}
    </div>
  );
};
