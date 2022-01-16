import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders button group with a default value", () => {
  render(<App />);
  const linkElement = screen.getByText(/1 day/i);
  expect(linkElement).toBeInTheDocument();
});
