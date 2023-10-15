import { tracks } from "../../tracks";

//TODO: I want the tracks to play the assigned audio when clicked
export const TrackList = () => {
  return (
    <div className='flex flex-col'>
      {tracks.map((track, index) => (
        <a key={index} href={track.src}>
          {track.title}
        </a>
      ))}
    </div>
  );
};
