import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test('renders', () => {
  render(<BoxList />);
});

test('matches last snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test('can add box', () => {
    const { getByText, getByLabelText, getByTestId } = render(<BoxList />);
    const form = getByTestId("form");
    const width = getByLabelText("Width:");
    const height = getByLabelText("Height:");
    
    fireEvent.change(width, { target: { value: 300 } });
    fireEvent.change(height, { target: { value: 500 } });
    fireEvent.submit(form);

    const box = document.querySelector(".Box");
    expect(box).toBeInTheDocument();
    expect(box).toHaveStyle({
        width: "300px",
        height: "500px",
        "background-color": "#000000"
    });
});