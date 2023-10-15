import '../index.css';
import '../customize-progress-bar.css';
export const ProgressBar = ({progressBarRef, audioRef, timeProgress, duration}) => {
    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
      };

      const formatTime = (time) => {
        if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60);
          const formatMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
          const seconds = Math.floor(time % 60);
          const formatSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
      };

  return (
    <div className="progress mt-4">
      <h2 className="time current">{formatTime(timeProgress)}</h2>
      <input type="range" ref={progressBarRef} defaultValue="0"
        onChange={handleProgressChange}/>
      <span className="time">{formatTime(duration)}</span>
    </div>
  )
}
