import P from 'prop-types';
function BackgroundContainer({
  children,
  darkBg = false,
  image = false,
  source,
}) {
  return (
    <section
      className={`${darkBg ? `bg-[#0A1128]` : 'bg-white'} overflow-y-scroll  flex mx-auto my-auto flex-col w-full min-h-screen`}
    >
      {image && (
        <img
          className="  absolute w-screen min-h-screen object-cover max-h-screen"
          alt="Background Container Image"
          src={source}
        />
      )}
      <div
        className={`${darkBg || image ? `text-white` : `text-primary`} flex max-h-screen relative max-w-[1200px] my-auto mx-auto p-8`}
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
  source: P.string.isRequired,
};
export default BackgroundContainer;
