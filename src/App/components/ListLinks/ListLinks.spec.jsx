import { render, screen } from '@testing-library/react';
import ListLinks from '.';
import links from '../NavBar/mockLinks';

describe('<ListLinks/>', () => {
  it('should render links component', () => {
    render(<ListLinks links={links} />);
    const linkComponent = screen.getAllByRole('link');
    expect(linkComponent).toHaveLength(10);
  });
  it('should render links component with text', () => {
    render(<ListLinks links={links} />);
    const linkComponent = screen.getAllByText(/texto/i);
    expect(linkComponent).toHaveLength(10);
  });
  it('should render links component with links', () => {
    render(<ListLinks links={links} />);
    const linkComponent = screen.getAllByRole('link');
    expect(linkComponent).toHaveLength(10);
    expect(linkComponent[2]).toHaveAttribute('href', '#texto3');
  });
  it('should match a snapshot', () => {
    render(<ListLinks links={links} />);
    const linkComponent = screen.getAllByRole('link');
    expect(linkComponent).toMatchSnapshot();
  });
});
