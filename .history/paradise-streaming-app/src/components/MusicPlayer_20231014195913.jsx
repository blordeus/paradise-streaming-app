import { useState } from "react";
import { tracks } from "../../tracks";

import { Controls } from "./Controls";
import { DisplayTrack } from "./DisplayTrack";
import { ProgressBar } from "./ProgressBar";

export const MusicPlayer = () => {
    const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack currentTrack/>
        <Controls/>
        <ProgressBar/>
      </div>
    </div>
  );
};
