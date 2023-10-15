import { tracks } from "../../tracks";

export const TrackList = ({currentTrack}) => {
  return (
    <div className='flex flex-col'>
      {tracks.map((track, index) => (
        <a key={index} href={track.src}         src={currentTrack.src}
        >
          {track.title}
        </a>
      ))}
    </div>
  );
};
