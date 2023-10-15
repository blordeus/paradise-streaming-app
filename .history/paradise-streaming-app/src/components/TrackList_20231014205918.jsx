import React from 'react'

export const TrackList = () => {
  // List all tracks and link to the appropriate track
  return (
    <div>
      {tracks.map((track) => (
        <a href={`/track/${track.id}`} key={track.id}>
          {track.title}
        </a>
      ))}
    </div>
  );
};
