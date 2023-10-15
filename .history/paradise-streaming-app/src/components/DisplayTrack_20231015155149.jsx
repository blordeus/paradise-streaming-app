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
      <div className="audio-info">
        <div className="audio-image mr-8">
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt="audio avatar" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
          <p className="title">{currentTrack.title}</p>
        </div>
        {/* <div className="text">
          <p className="title">{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div> */}
       
      </div>
      {/* TODO: List all tracks and link to the appropriate track */}
    </div>
  );
};
