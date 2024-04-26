import { getByTestId, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Calculator from './Calculator'

test('on first page load, starting amount input should be empty', async () => {
  render(<Calculator />)

  const element = screen.getByTestId('starting-amount-input').textContent
  expect(element).toEqual('')
})

test('error message should populate if an empty input is submitted', async () => {
  const user = userEvent.setup()
  render(<Calculator />)

  const submitButton = screen.getByRole('button', { name: 'Calculate' })
  await user.click(submitButton)
  const errorMessages = screen.getByTestId('error-messages')
  expect(errorMessages).toBeInTheDocument()
})
