import React from 'react'

export const DisplayTrack = ({currentTrack, audioRef}) => {
  return (
    <div>
    <audio src={currentTrack.src} ref={audioRef} />
  </div>
  )
}
