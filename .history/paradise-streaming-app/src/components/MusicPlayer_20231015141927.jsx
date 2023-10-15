import { useState, useRef } from "react";
import { tracks } from "../../tracks";

import { Controls } from "./Controls";
import { DisplayTrack } from "./DisplayTrack";
import { ProgressBar } from "./ProgressBar";

export const MusicPlayer = () => {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef();
    const progressBarRef = useRef();


  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack currentTrack={currentTrack} audioRef={audioRef} setDuration={setDuration} progressBarRef={progressBarRef}/>
        <Controls audioRef={audioRef} progressBarRef={progressBarRef} duration={duration} setTimeProgress={setTimeProgress} tracks={tracks} trackIndex={trackIndex} setTrackIndex={setTrackIndex} setCurrentTrack={setCurrentTrack}/>
        <ProgressBar progressBarRef={progressBarRef} audioRef={audioRef} timeProgress={timeProgress} duration={duration}/>
      </div>
    </div>
  );
};
