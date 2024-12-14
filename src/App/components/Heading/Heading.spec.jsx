import { render, screen } from '@testing-library/react';
import Heading from '.';

describe('<Heading/>', () => {
  it('should render a heading on the screen with default properties', () => {
    render(
      <Heading font="font-serrat" size="text-large">
        hello
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'hello' });

    expect(heading).toHaveClass('font-serrat');
    expect(heading).toHaveClass('font-600');
    expect(heading).toHaveClass('text-primary');
    expect(heading).toHaveClass('text-mediumlarge');
    expect(heading).toHaveClass('leading-none');
    expect(heading).toHaveClass('md:text-large');
  });
  it('should render an uppercase heading', () => {
    render(
      <Heading uppercase font="font-serrat" size="text-large">
        hello
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'hello' });
    expect(heading).toHaveClass('uppercase');
  });
  it('should render a white heading', () => {
    render(
      <Heading colorDark font="font-serrat" size="text-large">
        hello
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'hello' });
    expect(heading).toHaveClass('text-white');
  });
  it('should render a sans font heading', () => {
    render(
      <Heading font="font-sans" size="text-large">
        hello
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'hello' });
    expect(heading).toHaveClass('font-sans');
  });
  it('should render a size medium text heading', () => {
    render(
      <Heading font="font-sans" size="text-medium">
        hello
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'hello' });
    expect(heading).toHaveClass('font-sans');
  });
  it('should render a md:text-large and a text-mediumlarge', () => {
    render(
      <Heading font="font-sans" size="text-large">
        hello
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'hello' });
    expect(heading).toHaveClass('text-large');
    expect(heading).toHaveClass('md:text-large');
    expect(heading).toHaveClass('text-mediumlarge');
  });
  it('should render a correct heading', () => {
    const { container } = render(
      <Heading Head="h5" font="font-sans" size="text-large">
        hello
      </Heading>,
    );
    const h5 = container.querySelector('h5');

    expect(h5.tagName.toLowerCase()).toBe('h5');
  });
});
