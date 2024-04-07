import { render, screen } from '@testing-library/react';
import AvatarImage from './avatar-image.tsx';
import { image } from 'faker';

describe('AvatarImage component', () => {
  it('should render with tag "div" if haven\'t url', () => {
    const id = 'header-avatar-image';

    render(<AvatarImage />);

    const avatar = screen.getByTestId(id);
    expect(avatar).toBeInTheDocument();
    expect(avatar.tagName.toLowerCase()).toBe('div');
  });

  it('should render with tag "img" if have url', () => {
    const id = 'header-avatar-image';
    const url = image.image();

    render(<AvatarImage avatarUrl={url}/>);

    const avatar = screen.getByTestId(id);
    expect(avatar).toBeInTheDocument();
    expect(avatar.tagName.toLowerCase()).toBe('img');
  });
});
