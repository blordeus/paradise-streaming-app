import React from 'react'

export const TrackList = () => {
  // List all track titles from tracks.js and link to the appropriate track
  return (
    <div>
      {tracks.map((track) => (
        // TODO: Add a Link component instead of using an anchor tag
        <Link to={`/track/${track.id}`} key={track.id}>
          {track.title}
        </Link>
      ))}
    </div>
  );
};
