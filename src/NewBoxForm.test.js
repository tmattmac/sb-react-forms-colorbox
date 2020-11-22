import { render, screen } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders', () => {
  render(<NewBoxForm />);
});

test('matches last snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});