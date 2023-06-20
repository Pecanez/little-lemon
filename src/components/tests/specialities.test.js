import React from 'react';
import { render, screen } from '@testing-library/react';
import Specialities from '../Specialities';

describe('Specialities', () => {
  test('renders the specialities menus', () => {
    render(<Specialities />);

    const menuImages = screen.getAllByRole('img');
    expect(menuImages).toHaveLength(3); // Assuming there are 3 menu images

    const menuTitles = screen.getAllByRole('heading', { level: 3 });
    expect(menuTitles).toHaveLength(3); // Assuming there are 3 menu titles

    const menuDescriptions = screen.getAllByRole('paragraph');
    expect(menuDescriptions).toHaveLength(3); // Assuming there are 3 menu descriptions
  });
});
