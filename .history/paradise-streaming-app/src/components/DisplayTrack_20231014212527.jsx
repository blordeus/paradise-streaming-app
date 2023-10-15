import { BsMusicNoteBeamed } from 'react-icons/bs';
import { TrackList } from './TrackList';

export const DisplayTrack = ({currentTrack, setDuration}) => {

    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
      };
    
  return (
    <div>
      <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata}/>
      <div className="audio-info">
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
        </div>
        <div className="text">
          <p className="title">{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div>
        <div className="text-center mb-1">
          {/* <p className="text-slate-300 font-bold">
            {currentTrack?.title ?? "Select a song"}
          </p>
          <p className="text-xs">{currentTrack.author}</p> */}
          <TrackList src={currentTrack.src} ref={audioRef}/>
        </div>
      </div>
      {/* TODO: List all tracks and link to the appropriate track */}
    </div>
  );
}
