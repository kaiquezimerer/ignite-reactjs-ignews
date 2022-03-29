import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';

import { SignInButton } from '.';

// Mocking modules (next-auth/react)
jest.mock('next-auth/react');

describe('SignInButton component', () => {
  // Testa renderização no caso do usuário NÃO autenticado
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = jest.mocked(useSession);
    useSessionMocked.mockReturnValueOnce({ data: null, status: 'loading' });

    render(<SignInButton />);

    expect(screen.getByText('Sign in with GitHub')).toBeInTheDocument();
  });

  // testa renderizção no caso do usuário autenticado
  it('renders correctly when user is authenticated', () => {
    const useSessionMocked = jest.mocked(useSession);
    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: 'John Doe', email: 'john.doe@example.com'
        },
        expires: 'fake-expires'
      },
      status: 'authenticated'
    });

    const { debug } = render(<SignInButton />);

    debug();

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
