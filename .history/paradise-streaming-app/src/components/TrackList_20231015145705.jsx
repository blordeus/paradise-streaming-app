import { tracks } from "../../tracks";

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
-export const TrackList = () => {
-    //TODO: I want the tracks to play the assigned audio when clicked
-
-  return (
-    <div className='flex flex-col'>
-      {tracks.map((track, index) => (
-        <a key={index} href={track.src}>
-          {track.title}
-        </a>
-      ))}
-    </div>
-  );
-};
+export const TrackList = () => {
+
+  const playAudio = (src) => {
+    // implement code to play the audio
+  };
+
+  return (
+    <div className='flex flex-col'>
+      {tracks.map((track, index) => (
+        <a key={index} href={track.src} onClick={() => playAudio(track.src)}>
+          {track.title}
+        </a>
+      ))}
+    </div>
+  );
+};
<<<<<  bot-da6ce94e-0533-433e-96e3-86499faa2690  >>>>>
