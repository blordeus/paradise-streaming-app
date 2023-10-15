import React from 'react'

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
-export const TrackList = () => {
-    /* TODO: List all tracks and link to the appropriate track */
-  return (
-    <div>TrackList</div>
-  )
-}
+export const TrackList = () => {
+  // List all tracks and link to the appropriate track
+  return (
+    <div>
+      {tracks.map((track) => (
+        <a href={`/track/${track.id}`} key={track.id}>
+          {track.name}
+        </a>
+      ))}
+    </div>
+  );
+};
<<<<<  bot-6170418d-9e38-48ab-b2c2-d6b2970ab075  >>>>>
