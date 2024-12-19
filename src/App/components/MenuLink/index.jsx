import P from 'prop-types';

function MenuLink({ text, link, newTab = false }) {
  return (
    <div>
      <a
        className="relative text-primary m-2 py-2 text-xsmall hvr-underline-from-center"
        href={link}
        target={newTab ? '_blank' : '_self'}
        rel="noreferrer"
      >
        {text}
      </a>
    </div>
  );
}
MenuLink.propTypes = {
  link: P.string.isRequired,
  newTab: P.bool,
  text: P.string.isRequired,
};
export default MenuLink;
