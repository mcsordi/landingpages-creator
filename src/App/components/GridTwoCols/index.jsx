import P from 'prop-types';
import BackgroundContainer from '../BackgroundContainer';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

function GridTwoCols({ source }) {
  return (
    <BackgroundContainer image source="./images/main-bg.svg">
      <section className="mt-12 pb-12 md-pb-0 w-full justify-center items-center h-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-1">
        <div className="flex flex-col gap-12">
          <Heading
            Head="h1"
            colorDark
            size="text-large"
            uppercase
            weight="font-900"
          >
            January brings us Firefox 85
          </Heading>
          <TextComponent darkMode>
            To wrap up January, we are proud to bring you the release of Firefox
            85. In this version we are bringing you support for the
            :focus-visible pseudo-class in CSS and associated devtools, and the
            complete removal of Flash support from Firefox.
          </TextComponent>
        </div>
        <div className="mt-12">
          <img alt="Javascript image" src={source} />
        </div>
      </section>
    </BackgroundContainer>
  );
}
GridTwoCols.propTypes = {
  source: P.string.isRequired,
};
export default GridTwoCols;
