
export const Header = () => {

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
-const onHover = () => {
-  // code to change the color of the h1 element
-};
+const onHover = () => {
+  const h1 = document.querySelector('h1');
+  // Apply a new color to the h1 element on hover
+  h1.addEventListener('mouseover', () => {
+    h1.style.color = 'red';
+  });
+};
<<<<<  bot-fe790e87-ea38-4302-aec1-562764d7db07  >>>>>
  h1.addEventListener('mouseover', () => {
    h1.style.color = 'red';
  });
};

  return (
    <>
      <h1 className="text-6xl" onMouseEnter={onHover}>Paradise Streaming</h1>
      <p className="text-xl my-4">Do you want to listen to my album early?</p>
    </>
  );
};
