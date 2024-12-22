import { fireEvent, render, screen } from '@testing-library/react';
import NavBar from '.';

describe('<NavBar/>', () => {
  it('should render NavBar Component', () => {
    render(<NavBar></NavBar>);
    const navComponent = screen.getByRole('navigation');
    expect(navComponent)
      .toHaveClass(`hidden items-center justify-around flex-col
        min-h-screen bg-white w-full py-1.5 md:flex md:min-h-0 md:flex-row`);
  });
  it('should render NavBar Component with display flex after 1 click', () => {
    const { container } = render(<NavBar />);
    const component = container.children[1].firstChild.firstChild;
    fireEvent.click(component);
    expect(container.children[0]).toHaveClass('flex');
  });
  it('should render NavBar Component with display hidden after 2 clicks', () => {
    const { container } = render(<NavBar />);
    const component = container.children[1].firstChild.firstChild;
    fireEvent.doubleClick(component);
    expect(container.children[0]).toHaveClass('hidden');
  });
  it('should have bg color bg-[#0A1128] p-1.5 text-white classes', () => {
    const { container } = render(<NavBar />);
    const component = container.children[1].firstChild;
    expect(component).toHaveClass('bg-[#0A1128] p-1.5 text-white');
  });

  it('should match a snapshot', () => {
    const { container } = render(<NavBar />);
    const component = container.children[1].firstChild;
    fireEvent.click(component);
    expect(container).toMatchSnapshot();
  });
});
