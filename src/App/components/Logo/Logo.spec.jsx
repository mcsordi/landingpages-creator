import { render, screen } from '@testing-library/react';
import Logo from '.';

describe('<Logo/>', () => {
  it('should render logo text component', () => {
    render(<Logo logo="logo" />);
    const logo = screen.getByText('logo'.toUpperCase());
    expect(logo).toHaveClass('text-intermedium font-serrat font-900');
  });
  it('should render logo image component', () => {
    render(<Logo image logo="./images/landing_page_2_c6baa21725.svg" />);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute(
      'src',
      './images/landing_page_2_c6baa21725.svg',
    );
  });
  it('should match a logo component snapshot', () => {
    render(<Logo logo="logo" />);
    const logo = screen.getByText('logo'.toUpperCase());
    expect(logo).toMatchSnapshot();
  });
});
