import { BsMusicNoteBeamed } from 'react-icons/bs';

export const DisplayTrack = ({currentTrack, audioRef}) => {
  return (
    <div>
    <audio src={currentTrack.src} ref={audioRef} />
  </div>
  )
}
