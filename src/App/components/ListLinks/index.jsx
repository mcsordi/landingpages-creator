import P from 'prop-types';
import MenuLink from '../MenuLink/index';

function ListLinks({ links }) {
  return (
    <div className="flex flex-col md:flex-row flex-wrap md:max-w-xl">
      {links.map((link, id) => (
        <MenuLink text={link.text} link={link.link} key={id}></MenuLink>
      ))}
    </div>
  );
}
ListLinks.propTypes = {
  links: P.object,
};
export default ListLinks;
