import { tracks } from "../../tracks";
import { Controls } from "./Controls";


export const TrackList = ({
  audioRef,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
  togglePlayPause,
  isPlaying,
  setIsPlaying
}) => {
  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  return (
    <div className="flex flex-col">
      {tracks.map((track, index) => (
        <a
          className="cursor-pointer"
          key={index}
          onClick={togglePlayPause}
        >
          {track.title}
        </a>
      ))}
    </div>
  );
};