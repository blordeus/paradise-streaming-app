import React from 'react'

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
-export const TrackList = () => {
-  // List all track titles from tracks.js and link to the appropriate track
-  return (
-    <div>
-      {tracks.map((track) => (
-        <a href={`/track/${track.id}`} key={track.id}>
-          {track.title}
-        </a>
-      ))}
-    </div>
-  );
-};
+export const TrackList = () => {
+  // List all track titles from tracks.js and link to the appropriate track
+  return (
+    <div>
+      {tracks.map((track) => (
+        // TODO: Add a Link component instead of using an anchor tag
+        <Link to={`/track/${track.id}`} key={track.id}>
+          {track.title}
+        </Link>
+      ))}
+    </div>
+  );
+};
<<<<<  bot-49e8e3a6-ffa1-4503-9100-c0e7e7ec4e38  >>>>>
