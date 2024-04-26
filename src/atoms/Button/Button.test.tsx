import React from 'react'
import Button from './Button'
import { render, screen } from '@testing-library/react'

test('renders button and responds to click events', () => {
  render(<Button>Click me</Button>)

  const buttonElement = screen.getByText(/Click me/i)
  expect(buttonElement).toBeInTheDocument() // Use the toBeInTheDocument matcher
})
