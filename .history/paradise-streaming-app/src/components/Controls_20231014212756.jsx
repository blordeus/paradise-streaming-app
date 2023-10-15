import { useState, useEffect } from 'react';

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

export const Controls = ({audioRef}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playAnimationRef = useRef();

const repeat = () => {
  console.log('run');

  playAnimationRef.current = requestAnimationFrame(repeat);
};

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
      };

      useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }, [isPlaying, audioRef]);

  return (
<div className="controls-wrapper">
      <div className="controls">
        <button>
          <IoPlaySkipBackSharp />
        </button>
        <button>
          <IoPlayBackSharp />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button>
          <IoPlayForwardSharp />
        </button>
        <button>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>  )
}
