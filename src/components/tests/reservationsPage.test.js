import React from 'react';
import { render, screen } from '@testing-library/react';
import ReservationsPage from '../ReservationsPage';

describe('ReservationsPage', () => {
  test('renders the reservations form', () => {
    render(<ReservationsPage />);

    const formTitle = screen.getByRole('heading', { level: 1, name: 'Reserve a Table' });
    expect(formTitle).toBeInTheDocument();

    const formDescription = screen.getByText('Please fill the required details to book your reservation.');
    expect(formDescription).toBeInTheDocument();

    const formComponent = screen.getByRole('form');
    expect(formComponent).toBeInTheDocument();
  });
});
