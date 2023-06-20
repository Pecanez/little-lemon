import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavLinks from '../NavLinks';

describe('NavLinks', () => {
  test('renders the navigation links', () => {
    render(
      <MemoryRouter>
        <NavLinks />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');

    const menuLink = screen.getByRole('link', { name: 'Menu' });
    expect(menuLink).toBeInTheDocument();
    expect(menuLink).toHaveAttribute('href', '/menu');

    const reservationsLink = screen.getByRole('link', { name: 'Reservations' });
    expect(reservationsLink).toBeInTheDocument();
    expect(reservationsLink).toHaveAttribute('href', '/reservations');
  });
});
