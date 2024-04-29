import React from 'react'
import MenuItem from './MenuItem'
import { render } from '@testing-library/react'
import ToggleContext from '../../contexts/ToggleContext'

test('renders Menu Item component', () => {
  const { getByText } = render(<MenuItem>Test Menu Item</MenuItem>)
  expect(getByText('Test Menu Item')).toBeInTheDocument()
})

test('applies styles from sx prop', () => {
  const { getByText } = render(
    <MenuItem sx={{ fontSize: '16px' }}>Test Menu Item</MenuItem>
  )
  expect(getByText('Test Menu Item')).toHaveStyle('font-size: 16px')
})

test('renders startIcon', () => {
  const { getByTestId } = render(
    <MenuItem startIcon={<span data-testid="icon" />}>Test Menu Item</MenuItem>
  )
  expect(getByTestId('icon')).toBeInTheDocument()
})

test('renders endIcon', () => {
  const { getByTestId } = render(
    <MenuItem endIcon={<span data-testid="icon" />}>Test Menu Item</MenuItem>
  )
  expect(getByTestId('icon')).toBeInTheDocument()
})

test('renders with toggle is true', () => {
  const { queryByText } = render(
    <ToggleContext.Provider value={true}>
      <MenuItem>Test Menu Item</MenuItem>
    </ToggleContext.Provider>
  )
  expect(queryByText('Test Menu Item')).not.toBeInTheDocument()
})
