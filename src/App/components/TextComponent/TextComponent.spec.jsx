import { render, screen } from '@testing-library/react';
import TextComponent from '.';

describe('<TextComponent/>', () => {
  it('should render TextComponent with "text" inside', () => {
    render(<TextComponent>text</TextComponent>);
    const textComp = screen.getByText('text');
    expect(textComp).toBeInTheDocument();
  });
  it('should render TextComponent with font-sans text-small classes', () => {
    render(<TextComponent>text</TextComponent>);
    const textComp = screen.getByText('text');
    expect(textComp).toHaveClass('text-small');
    expect(textComp).toHaveClass('font-sans');
    expect(textComp).toHaveClass('text-primary');
  });
  it('should render TextComponent with white text', () => {
    render(<TextComponent darkMode>text</TextComponent>);
    const textComp = screen.getByText('text');
    expect(textComp).toHaveClass('text-white');
  });
  it('should match a snapshot', () => {
    const { container } = render(<TextComponent>text</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
