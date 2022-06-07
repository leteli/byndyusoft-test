import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from '../App.jsx';


test('renders form with correct result', async () => {
  render(<App />);
  userEvent.type(await screen.findByLabelText(/Введите числа/i), '6, -5,3');
  userEvent.click(await screen.findByRole('button', { name: /Отправить/i}));
  expect(await screen.findByText(/Результат:/i)).toBeInTheDocument();
  expect(await screen.findByText(/-2/i)).toBeInTheDocument();  
});

test('renders form with incorrect result', async () => {
  render(<App />);
  userEvent.type(await screen.findByLabelText(/Введите числа/i), '0, 5, null, "5"');
  userEvent.click(await screen.findByRole('button', { name: /Отправить/i}));
  expect(await screen.findByText(/Данные введены некорректно. Введите числа через запятую./i)).toBeInTheDocument();
});

test('allows no type conversion', async () => {
  render(<App />);
  userEvent.type(await screen.findByLabelText(/Введите числа/i), ' ,, ');
  userEvent.click(await screen.findByRole('button', { name: /Отправить/i}));
  expect(await screen.findByText(/Данные введены некорректно. Введите числа через запятую./i)).toBeInTheDocument();
});
