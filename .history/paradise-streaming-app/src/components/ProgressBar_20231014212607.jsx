import '../index.css';
import '../customize-progress-bar.css';
export const ProgressBar = ({progressBarRef, audioRef, timeProgress, duration}) => {
    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
        console.log(progressBarRef.current.value);
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
    <div className="progress">
      <span className="time current">{(timeProgress)}</span>
      <input type="range" ref={progressBarRef} defaultValue="0"
        onChange={handleProgressChange}/>
      <span className="time">{duration}</span>
    </div>
  )
}
