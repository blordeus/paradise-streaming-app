import { useState, useRef } from "react";
import { tracks } from "../../tracks";

import { Controls } from "./Controls";
import { DisplayTrack } from "./DisplayTrack";
import { ProgressBar } from "./ProgressBar";

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
-export const MusicPlayer = () => {
-    const [currentTrack, setCurrentTrack] = useState(tracks[0]);
-
-    const audioRef = useRef();
-
-    //TODO: List all tracks and link to the appropriate track
-
-  return (
-    <div className="audio-player">
-      <div className="inner">
-        <DisplayTrack currentTrack={currentTrack} audioRef={audioRef}/>
-        <Controls audioRef={audioRef}/>
-        <ProgressBar/>
-      </div>
-    </div>
-  );
-};
+export const MusicPlayer = () => {
+    const [currentTrack, setCurrentTrack] = useState(tracks[0]);
+
+    const audioRef = useRef();
+
+    const trackList = tracks.map((track, index) => (
+        <a key={index} href="#" onClick={() => setCurrentTrack(track)}>{track}</a>
+    ));
+
+    return (
+        <div className="audio-player">
+            <div className="inner">
+                <DisplayTrack currentTrack={currentTrack} audioRef={audioRef}/>
+                <Controls audioRef={audioRef}/>
+                <ProgressBar/>
+                {trackList}
+            </div>
+        </div>
+    );
+};
<<<<<  bot-6895716a-9812-4fa3-b7d9-4cd35a04008c  >>>>>
