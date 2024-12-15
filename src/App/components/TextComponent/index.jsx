import P from 'prop-types';
function TextComponent({ children, darkMode = false }) {
  return (
    <p
      className={`${darkMode ? `text-white` : `text-primary`} font-sans text-small`}
    >
      {children}
    </p>
  );
}
TextComponent.propTypes = {
  children: P.string,
  darkMode: P.bool,
};
export default TextComponent;
