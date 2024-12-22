import P from 'prop-types';
function Logo({ image = false, logo }) {
  return (
    <div className="flex items-center">
      {image ? (
        <img src={logo} alt="logo image" className="w-28" />
      ) : (
        <span className="text-intermedium font-serrat font-900">
          {logo.toUpperCase()}
        </span>
      )}
    </div>
  );
}
Logo.propTypes = {
  logo: P.string.isRequired,
  image: P.bool,
};
export default Logo;
