import { BsMusicNoteBeamed } from "react-icons/bs";
import { TrackList } from "./TrackList";

export const DisplayTrack = ({
  currentTrack,
  setDuration,
  progressBarRef,
  audioRef,
  handleNext,
  togglePlayPause,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="audio-info mb-24">
        <div className="audio-image">
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt="audio avatar" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
          <p className="title mt-8">{currentTrack.title}</p>
     
      </div>
      {/* TODO: List all tracks and link to the appropriate track */}
    </div>
  );
};
