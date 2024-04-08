import { render, screen } from '@testing-library/react';
import Host from './host.tsx';
import { makeFakeHostUser } from '../../../utils/tests';
import { lorem } from 'faker';

describe('Host component', () => {
  it('should render avatar, user name and description', () => {
    const avatarId = 'host-avatar';
    const usernameId = 'host-user-name';
    const descriptionId = 'host-description';

    const user = makeFakeHostUser();
    const description = lorem.words(30);

    render(<Host user={user} description={description} />);

    expect(screen.getByTestId(avatarId)).toBeInTheDocument();
    expect(screen.getByTestId(usernameId)).toBeInTheDocument();
    expect(screen.getByTestId(descriptionId)).toBeInTheDocument();
  });

  it('should render "isPro" if user is pro', () => {
    const isProId = 'host-is-pro';
    const user = makeFakeHostUser(true);

    render(<Host user={user} description={lorem.words(30)} />);

    expect(screen.getByTestId(isProId)).toBeInTheDocument();
  });

  it('should not render "isPro" if user is not pro', () => {
    const isProId = 'host-is-pro';
    const user = makeFakeHostUser(false);

    render(<Host user={user} description={lorem.words(30)} />);

    expect(screen.queryByTestId(isProId)).not.toBeInTheDocument();
  });
});
