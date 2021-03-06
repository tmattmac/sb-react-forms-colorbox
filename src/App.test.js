import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
});

test('matches last snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});