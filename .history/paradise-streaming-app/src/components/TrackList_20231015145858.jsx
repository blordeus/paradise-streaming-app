import { tracks } from "../../tracks";

export const TrackList = () => {

const playAudio = (src) => {
  const audio = new Audio(src);
  audio.play();
};

  return (
    <div className='flex flex-col select-text'>
      {tracks.map((track, index) => (
        <a key={index} onClick={() => playAudio(track.src)}>
          {track.title}
        </a>
      ))}
    </div>
  );
};
