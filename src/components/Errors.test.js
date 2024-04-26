import { render, screen } from '@testing-library/react'
import Errors from './Errors'
import '@testing-library/jest-dom'

test('on empty starting amount form submission, populate error message', async () => {
  render(<Errors errorStartingAmount="true" />)

  const section = screen.getByLabelText('Error messages')
  const errorMessage = screen.getAllByRole('listitem').find((listitem) => listitem.textContent === 'Please enter a starting amount in US Dollars')
  expect(errorMessage).toBeInTheDocument()
})

test('on starting amount form submission that contains letters, populate error message', async () => {
  render(<Errors errorNoLetters="true" />)

  const section = screen.getByLabelText('Error messages')
  const errorMessage = screen.getAllByRole('listitem').find((listitem) => listitem.textContent === 'Please enter numeric characters only')
  expect(errorMessage).toBeInTheDocument()
})
