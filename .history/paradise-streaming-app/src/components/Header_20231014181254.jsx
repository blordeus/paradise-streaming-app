
<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
-export const Header = () => {
-
-    //TODO: create a onHover function that constantly changes the color of the h1 element
-    
-  return (
-    <>
-      <h1 className="text-6xl">Paradise Streaming</h1>
-      <p className="text-xl my-4">Do you want to listen to my album early?</p>
-    </>
-  );
-};
+export const Header = () => {
+
+  const onHover = () => {
+    // code to change the color of the h1 element
+  };
+
+  return (
+    <>
+      <h1 className="text-6xl" onMouseEnter={onHover}>Paradise Streaming</h1>
+      <p className="text-xl my-4">Do you want to listen to my album early?</p>
+    </>
+  );
+};
<<<<<  bot-6e84b4e8-93ec-4d5a-b378-29d61336ccd9  >>>>>
