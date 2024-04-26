import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Results from './Results'

test('on end balance amount update, announce the new end balance', async () => {
  render(<Results />)

  const element = screen.getByTestId('end-balance')
  expect(element).toHaveAttribute('aria-live', 'polite')
})

test('on starting amount update, announce the new end balance', async () => {
  render(<Results />)

  const element = screen.getByTestId('starting-amount')
  expect(element).toHaveAttribute('aria-live', 'polite')
})

test('on total interest amount update, announce the new end balance', async () => {
  render(<Results />)

  const element = screen.getByTestId('total-interest')
  expect(element).toHaveAttribute('aria-live', 'polite')
})
