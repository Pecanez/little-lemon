import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  test('renders the footer component', () => {
    render(<Footer />);

    const logo = screen.getByAltText('Little Lemon logo');
    expect(logo).toBeInTheDocument();

    const description = screen.getByText(
      'A Mediterranean restaurant that offers a diverse culinary experience with dishes inspired by the Mediterranean region, featuring flavors and ingredients from countries such as Greece, Italy, Spain, and Turkey.'
    );
    expect(description).toBeInTheDocument();

    const openingTimes = screen.getByText('OPENING TIMES');
    expect(openingTimes).toBeInTheDocument();

    const weekdays = screen.getByText('Mon - Fri: 10:30AM - 12:00AM');
    expect(weekdays).toBeInTheDocument();

    const saturday = screen.getByText('Sat: 12:00PM - 1:00AM');
    expect(saturday).toBeInTheDocument();

    const sunday = screen.getByText('Sun: 10:30AM - 12:00AM');
    expect(sunday).toBeInTheDocument();

    const copyright = screen.getByText('© 2023 Little Lemon Ltd.');
    expect(copyright).toBeInTheDocument();
  });
});
