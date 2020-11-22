import { render, screen } from '@testing-library/react';
import Box from './Box';

test('renders', () => {
  render(<Box />);
});

test('matches last snapshot', () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});