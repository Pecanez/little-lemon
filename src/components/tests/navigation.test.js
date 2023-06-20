import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';

describe('Navigation', () => {
  test('renders the navigation component', () => {
    render(<Navigation />);

    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();

    const navLinks = screen.getByRole('navigation', { name: 'nav links' });
    expect(navLinks).toBeInTheDocument();
  });
});
