import { Controls } from "./Controls";
import { DisplayTrack } from "./DisplayTrack";

export const MusicPlayer = () => {
  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack />
        <Controls/>
      </div>
    </div>
  );
};
