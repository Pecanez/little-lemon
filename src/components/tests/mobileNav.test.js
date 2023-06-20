import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MobileNav from '../MobileNav';

describe('MobileNav', () => {
  test('toggles the menu on click', () => {
    render(<MobileNav />);

    const hamburgerIcon = screen.getByLabelText('menu');
    expect(hamburgerIcon).toBeInTheDocument();

    fireEvent.click(hamburgerIcon);
    const closeMenuIcon = screen.getByLabelText('close menu');
    expect(closeMenuIcon).toBeInTheDocument();

    fireEvent.click(closeMenuIcon);
    expect(hamburgerIcon).toBeInTheDocument();
  });

  test('displays navigation links when the menu is open', () => {
    render(<MobileNav />);

    const hamburgerIcon = screen.getByLabelText('menu');
    expect(hamburgerIcon).toBeInTheDocument();

    fireEvent.click(hamburgerIcon);
    const closeMenuIcon = screen.getByLabelText('close menu');
    expect(closeMenuIcon).toBeInTheDocument();

    const navLinks = screen.getByRole('navigation');
    expect(navLinks).toBeInTheDocument();

    fireEvent.click(closeMenuIcon);
    expect(navLinks).not.toBeInTheDocument();
  });
});
