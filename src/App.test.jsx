import { test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation link', () => {
  render(<App />);
  const links = screen.getAllByText(/Sobre/i);
  expect(links.length).toBeGreaterThan(0);
});
