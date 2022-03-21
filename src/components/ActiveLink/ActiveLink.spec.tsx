import { render, screen } from '@testing-library/react';

import { ActiveLink } from '.';

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

describe('ActiveLink component', () => {
  // Teste de renderizacão do link 'Home'
  it('renders correctly', () => {
    render(
      <ActiveLink href="/" activeClassname="active">
        <a>Home</a>
      </ActiveLink>
    );

    // debug();
    expect(screen.getByText('Home')).toBeInTheDocument()
  });

  // Teste se o link está com a classe 'active'
  it('adds active class if the link as currently active', () => {
    render(
      <ActiveLink href="/" activeClassname="active">
        <a>Home</a>
      </ActiveLink>
    );

    expect(screen.getByText('Home')).toHaveClass('active')
  });
});
