import { render, screen } from '@testing-library/react';
import MenuLink from '.';

describe('<MenuLink/>', () => {
  it('should render MenuLink with default properties', () => {
    render(<MenuLink link="https://www.google.com.br">text</MenuLink>);
    const component = screen.getByRole('link');
    expect(component).toHaveAttribute('target', '_self');
  });
  it('should render MenuLink with blank property', () => {
    render(
      <MenuLink newTab link="https://www.google.com.br">
        text
      </MenuLink>,
    );
    const component = screen.getByRole('link');
    expect(component).toHaveAttribute('target', '_blank');
  });
  it('should render MenuLink with underline class', () => {
    render(<MenuLink link="https://www.google.com.br">text</MenuLink>);
    const component = screen.getByRole('link');
    expect(component).toHaveClass('hvr-underline-from-center');
  });
});
