
export const Header = () => {

const onHover = () => {
  const h1 = document.querySelector('h1');
  // Apply a new color to the h1 element on hover
  h1.addEventListener('mouseover', () => {
    h1.style.color = 'red';
  });
};
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
