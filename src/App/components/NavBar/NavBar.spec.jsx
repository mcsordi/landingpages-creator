import { render, screen } from '@testing-library/react';
import NavBar from '.';
import MenuLink from '../MenuLink';
describe('<NavBar/>', () => {
  it('should render NavBar Component', () => {
    render(
      <NavBar>
        <MenuLink link={'https://www.google.com.br'} text={'google'} />
      </NavBar>,
    );
    const component = screen.getByRole('link');
  });
});
