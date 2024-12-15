import P from 'prop-types';

function Heading({
  Head = 'h1',
  children,
  size,
  colorDark = false,
  uppercase = false,
  weight = 'font-600',
}) {
  return (
    <Head
      className={`${weight} ${colorDark ? 'text-white' : 'text-primary'}
         ${uppercase && `uppercase`} font-serrat
      ${size}  ${size == `text-large` && `md:text-large`} ${size == `text-large` && `text-mediumlarge`} leading-none`}
    >
      {children}
    </Head>
  );
}
Heading.propTypes = {
  Head: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  children: P.string.isRequired,

  size: P.string.isRequired,
  colorDark: P.bool,
  uppercase: P.bool,
  weight: P.string,
};
export default Heading;
