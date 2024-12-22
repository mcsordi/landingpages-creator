import { render } from '@testing-library/react';
import BackgroundContainer from '.';

describe('<BackgroundContainer/>', () => {
  it('should render BackgroundContainer Default', () => {
    const container = render(<BackgroundContainer />);
    expect(container.container.firstChild).toHaveClass(
      'bg-white flex flex-col w-full min-h-screen',
    );
    expect(container.container.firstChild.firstChild).toHaveClass(
      'relative mx-auto my-auto max-w-[1200px] p-8 text-primary',
    );
  });
  it('should render BackgroundContainer with an image', () => {
    const container = render(<BackgroundContainer image />);
    expect(container.container.firstChild.firstChild).toHaveAttribute(
      'src',
      './images/main-bg.svg',
    );
    expect(container.container.firstChild.lastChild).toHaveClass('text-white');
  });
  it('should render BackgroundContainer with a background', () => {
    const container = render(<BackgroundContainer darkBg />);
    expect(container.container.firstChild.firstChild).toHaveClass('text-white');
    expect(container.container.firstChild).toHaveClass('bg-[#0A1128]');
  });
  it('should match a snapshot', () => {
    const container = render(<BackgroundContainer darkBg />);
    expect(container.container).toMatchSnapshot();
  });
});
