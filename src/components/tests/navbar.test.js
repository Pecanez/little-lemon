import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  test('renders the navbar component', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const logo = screen.getByAltText('Little Lemon logo');
    expect(logo).toBeInTheDocument();

    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();

    const mobileNav = screen.getByRole('navigation', { name: 'mobile navigation' });
    expect(mobileNav).toBeInTheDocument();
  });
});
