import '../index.css';
import './customize-progress-bar.css';
export const ProgressBar = () => {
  return (
    <div className="progress">
      <span className="time current">00:00</span>
      <input type="range" />
      <span className="time">03:34</span>
    </div>
  )
}
