import React from 'react'

export const DisplayTrack = ({currentTrack}) => {
  return (
    <div>
    <audio src={currentTrack.src} controls />
  </div>
  )
}
