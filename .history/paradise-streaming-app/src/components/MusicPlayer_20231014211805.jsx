import { useState, useRef } from "react";
import { tracks } from "../../tracks";

import { Controls } from "./Controls";
import { DisplayTrack } from "./DisplayTrack";
import { ProgressBar } from "./ProgressBar";

export const MusicPlayer = () => {
    const [currentTrack, setCurrentTrack] = useState(tracks[0]);

    const audioRef = useRef();
    const progressBarRef = useRef();


  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack currentTrack={currentTrack} audioRef={audioRef}/>
        <Controls audioRef={audioRef}/>
        <ProgressBar progressBarRef={progressBarRef} audioRef={a}/>
      </div>
    </div>
  );
};
