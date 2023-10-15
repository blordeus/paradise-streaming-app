import { tracks } from "../../tracks";

export const TrackList = () => {

  const playAudio = (src) => {
    //TODO: implement code to play the audio
  };

  return (
    <div className='flex flex-col'>
      {tracks.map((track, index) => (
        <a key={index} href={track.src} onClick={() => playAudio(track.src)}>
          {track.title}
        </a>
      ))}
    </div>
  );
};
