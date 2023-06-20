import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from '../Form';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';

describe('Form', () => {
    test('submits the form with valid data and navigates to the success page', async () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <Form />
        </Router>
      );
  
      // Fill in the form fields with valid data
      fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '1234567890' } });
      fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: '2' } });
      fireEvent.change(screen.getByLabelText(/date & time/i), { target: { value: '2023-06-21T12:00' } });
      fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'birthday' } });
  
      fireEvent.click(screen.getByText(/submit/i));
  
      // Wait for form submission and navigation
      await waitFor(() => {
        expect(history.location.pathname).toBe('/reservations-success');
      });
    });
  
    test('displays validation errors for invalid form data', async () => {
      render(
        <Router>
          <Form />
        </Router>
      );
  
      fireEvent.click(screen.getByText(/submit/i));
  
      // Wait for form validation errors
      await waitFor(() => {
        const fullNameError = screen.queryByText(/Full name is a required field/i);
        expect(fullNameError).toBeInTheDocument();
  
        const emailError = screen.queryByText(/Email is a required field/i);
        expect(emailError).toBeInTheDocument();
  
        const phoneError = screen.queryByText(/Phone is a required field/i);
        expect(phoneError).toBeInTheDocument();
  
        const guestsError = screen.queryByText(/guests must be a `number` type/i);
        expect(guestsError).toBeInTheDocument();
      });
    });
  });