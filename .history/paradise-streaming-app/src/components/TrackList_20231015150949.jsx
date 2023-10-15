import { tracks } from "../../tracks";

export const TrackList = ({
  audioRef,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
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
          onClick={() => playAudio(track.src)}
        >
          {track.title}
        </a>
      ))}
    </div>
  );
};
