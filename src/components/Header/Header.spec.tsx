import { render, screen } from '@testing-library/react';

import { Header } from '.';

// Mocking modules (next/router)
jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
});

// Mocking modules (next-auth/react)
jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false];
    }
  }
});

describe('Header component', () => {
  // Teste de renderizacão do componente Header
  it('renders correctly', () => {
    render(
      <Header />
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Posts')).toBeInTheDocument();
  });
});
