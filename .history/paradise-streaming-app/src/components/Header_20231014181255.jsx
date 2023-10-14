
export const Header = () => {

  const onHover = () => {
    // code to change the color of the h1 element
  };

  return (
    <>
      <h1 className="text-6xl" onMouseEnter={onHover}>Paradise Streaming</h1>
      <p className="text-xl my-4">Do you want to listen to my album early?</p>
    </>
  );
};
