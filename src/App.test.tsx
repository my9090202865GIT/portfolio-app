import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react';
import App from './App';

describe("", () => {
  test('App component render', () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
    })
    const linkElement = screen.getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
  });

})
