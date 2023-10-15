import { useState } from "react";
import { Controls } from "./Controls";
import { DisplayTrack } from "./DisplayTrack";
import { ProgressBar } from "./ProgressBar";
useS

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