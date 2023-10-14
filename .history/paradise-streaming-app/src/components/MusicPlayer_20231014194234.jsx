import { Controls } from "./Controls";
import { DisplayTrack } from "./DisplayTrack";
import { ProgressBar } from "./ProgressBar";

export const MusicPlayer = () => {
  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack />
        <Controls/>
        <ProgressBar/>
      </div>
    </div>
  );
};
