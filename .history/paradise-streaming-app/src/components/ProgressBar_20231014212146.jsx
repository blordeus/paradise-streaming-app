import '../index.css';
import '../customize-progress-bar.css';
export const ProgressBar = ({progressBarRef, audioRef, timeProgress, duration}) => {
    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
        console.log(progressBarRef.current.value);
      };

  return (
    <div className="progress">
      <span className="time current">{timeProgress}</span>
      <input type="range" ref={progressBarRef} defaultValue="0"
        onChange={handleProgressChange}/>
      <span className="time">03:34</span>
    </div>
  )
}
