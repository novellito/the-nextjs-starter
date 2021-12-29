import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../pages/counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../src/store/store';

function renderWithRedux(ui: JSX.Element) {
  const store = createStore(rootReducer);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe('Counter test suite', () => {
  it('should render the counter with 0 as the initial value', () => {
    const { getByText } = renderWithRedux(<Counter />);
    const initialCount = getByText('0');

    expect(initialCount).toBeInTheDocument();
  });

  it('should update the count to 1 when the +1 button is selected', () => {
    const { getByText } = renderWithRedux(<Counter />);

    const addBtn = getByText('ADD');
    fireEvent.click(addBtn);

    const initialCount = getByText('1');
    expect(initialCount).toBeInTheDocument();
  });

  it('should update the count to -1 when the -1 button is selected', () => {
    const { getByText } = renderWithRedux(<Counter />);

    const subtractBtn = getByText('SUBTRACT');
    fireEvent.click(subtractBtn);

    const initialCount = getByText('-1');
    expect(initialCount).toBeInTheDocument();
  });
});
