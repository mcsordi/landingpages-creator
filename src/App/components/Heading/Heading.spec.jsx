import { render, screen } from '@testing-library/react';
import Heading from '.';

describe('<Heading/>', () => {
  it('should render a heading on the screen with default properties', () => {
    render(<Heading size="text-large">hello</Heading>);
    const heading = screen.getByRole('heading', { name: 'hello' });

    expect(heading).toHaveClass('font-serrat');

    expect(heading).toHaveClass('text-primary');
    expect(heading).toHaveClass('text-mediumlarge');
    expect(heading).toHaveClass('leading-none');
    expect(heading).toHaveClass('md:text-large');
  });
  it('should render an uppercase heading', () => {
    render(
      <Heading uppercase size="text-large">
        hello
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'hello' });
    expect(heading).toHaveClass('uppercase');
  });
  it('should render a white heading', () => {
    render(
      <Heading colorDark size="text-large">
        hello
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'hello' });
    expect(heading).toHaveClass('text-white');
  });

  it('should render a md:text-large and a text-mediumlarge', () => {
    render(<Heading size="text-large">hello</Heading>);
    const heading = screen.getByRole('heading', { name: 'hello' });
    expect(heading).toHaveClass('text-large');
    expect(heading).toHaveClass('md:text-large');
    expect(heading).toHaveClass('text-mediumlarge');
  });
  it('should render a correct heading', () => {
    const { container } = render(
      <Heading Head="h5" size="text-large">
        hello
      </Heading>,
    );
    const h5 = container.querySelector('h5');

    expect(h5.tagName.toLowerCase()).toBe('h5');
  });
  it('should match a snapshot', () => {
    const { container } = render(
      <Heading colorDark uppercase Head="h5" size="text-large">
        hello
      </Heading>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
