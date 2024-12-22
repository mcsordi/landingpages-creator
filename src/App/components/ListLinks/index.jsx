import links from '../NavBar/mockLinks';
import MenuLink from '../MenuLink/index';

function ListLinks() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap md:max-w-xl">
      {links.map((link, id) => (
        <MenuLink text={link.text} link={link.link} key={id}></MenuLink>
      ))}
    </div>
  );
}
export default ListLinks;
