import { tracks } from "../../tracks";

export const TrackList = () => {

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
-const playAudio = (src) => {
-  //TODO: implement code to play the audio
-};
+const playAudio = (src) => {
+  const audio = new Audio(src);
+  audio.play();
+};
<<<<<  bot-608aa56c-694a-4257-a516-7ea44a0ecd64  >>>>>

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
