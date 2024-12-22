import P from 'prop-types';
function BackgroundContainer({ children, darkBg = false, image = false }) {
  return (
    <section
      className={`${darkBg ? `bg-[#0A1128]` : 'bg-white'} flex flex-col w-full min-h-screen`}
    >
      {image && (
        <img
          className="absolute w-screen h-screen object-cover max-h-screen"
          alt="Background Container Image"
          src="./images/main-bg.svg"
        />
      )}
      <div
        className={`${darkBg || image ? `text-white` : `text-primary`} relative mx-auto my-auto max-w-[1200px] px-8 py-6`}
      >
        {children}
      </div>
    </section>
  );
}

BackgroundContainer.propTypes = {
  children: P.node,
  darkBg: P.bool,
  image: P.bool,
};
export default BackgroundContainer;
