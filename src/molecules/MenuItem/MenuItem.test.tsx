import React from 'react'
import MenuItem from './MenuItem'
import { render } from '@testing-library/react'

test('renders Menu Item component', () => {
  const { getByText } = render(<MenuItem>Home</MenuItem>)
  expect(getByText('Home')).toBeInTheDocument()
})
