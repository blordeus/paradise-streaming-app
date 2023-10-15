import { BsMusicNoteBeamed } from 'react-icons/bs';

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
-export const DisplayTrack = ({currentTrack, audioRef}) => {
-    //TODO: List all tracks and link to the appropriate track
-  return (
-    <div>
-    <audio src={currentTrack.src} ref={audioRef} />
-    <div className="audio-info">
-      <div className="audio-image">
-        {currentTrack.thumbnail ? (
-          <img src={currentTrack.thumbnail} alt="audio avatar" />
-        ) : (
-          <div className="icon-wrapper">
-            <span className="audio-icon">
-              <BsMusicNoteBeamed />
-            </span>
-          </div>
-        )}
-      </div>
-      <div className="text">
-        <p className="title">{currentTrack.title}</p>
-        <p>{currentTrack.author}</p>
-      </div>
-      <div className="text-center mb-1">
-        <p className="text-slate-300 font-bold">
-          {currentTrack?.title ?? "Select a song"}
-        </p>
-        <p className="text-xs">{currentTrack.author}</p>
-      </div>
-    </div>
-  </div>
-  )
-}
+export const DisplayTrack = ({currentTrack, audioRef}) => {
+  return (
+    <div>
+      <audio src={currentTrack.src} ref={audioRef} />
+      <div className="audio-info">
+        <div className="audio-image">
+          {currentTrack.thumbnail ? (
+            <img src={currentTrack.thumbnail} alt="audio avatar" />
+          ) : (
+            <div className="icon-wrapper">
+              <span className="audio-icon">
+                <BsMusicNoteBeamed />
+              </span>
+            </div>
+          )}
+        </div>
+        <div className="text">
+          <p className="title">{currentTrack.title}</p>
+          <p>{currentTrack.author}</p>
+        </div>
+        <div className="text-center mb-1">
+          <p className="text-slate-300 font-bold">
+            {currentTrack?.title ?? "Select a song"}
+          </p>
+          <p className="text-xs">{currentTrack.author}</p>
+        </div>
+      </div>
+      {/* TODO: List all tracks and link to the appropriate track */}
+    </div>
+  );
+}
<<<<<  bot-3a3c40ca-21d6-48ab-9c2d-992fa117b802  >>>>>
