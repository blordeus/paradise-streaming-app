import React from 'react'

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
-export const TrackList = () => {
-  // List all track titles from tracks.js and link to the appropriate track
-  return (
-
-  );
-};
+import React from 'react';
+import { tracks } from './tracks';
+
+export const TrackList = () => {
+  return (
+    <div>
+      {tracks.map((track, index) => (
+        <a key={index} href={track.link}>
+          {track.title}
+        </a>
+      ))}
+    </div>
+  );
+};
<<<<<  bot-9f159b32-7ea4-4d4c-a376-8d88bc6fb0b0  >>>>>
