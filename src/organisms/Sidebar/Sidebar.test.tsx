import React from 'react'
import {
  findByTestId,
  fireEvent,
  getByTestId,
  render,
} from '@testing-library/react'
import Sidebar from './Sidebar'
import Menu from '../../molecules/Menu/Menu'
import MenuItem from '../../molecules/MenuItem'
import ToggleContext from '../../contexts/ToggleContext'

test('renders Sidebar component', () => {
  const { getByText } = render(
    <Sidebar>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Profile</MenuItem>
      </Menu>
    </Sidebar>
  )
  expect(getByText('Home')).toBeInTheDocument()
  expect(getByText('Profile')).toBeInTheDocument()
})

test('applies styles from sx prop', () => {
  const { getByText } = render(
    <Sidebar sx={{ fontSize: '1rem' }}>Home</Sidebar>
  )
  expect(getByText('Home')).toHaveStyle('font-size: 1rem')
})

test('renders with custom toggle button', () => {
  const { getByTestId } = render(
    <Sidebar toggleButton={<button data-testid="toggleBtn">Toggle</button>}>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Profile</MenuItem>
      </Menu>
    </Sidebar>
  )
  expect(getByTestId('toggleBtn')).toBeInTheDocument()
})

test('renders with not show toggle button', () => {
  const { queryByTestId } = render(
    <Sidebar showToggleButton={false}>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Profile</MenuItem>
      </Menu>
    </Sidebar>
  )
  expect(queryByTestId('defaultToggleButton')).not.toBeInTheDocument()
})

test('renders with toggle is false', () => {
  const { getByText } = render(<Sidebar>My Sidebar</Sidebar>)
  expect(getByText('My Sidebar')).toHaveStyle('width: 230px')
})

test('Sidebar toggles content when button is clicked', async () => {
  const { getByText, getByTestId } = render(
    <Sidebar toggleButton={<span data-testid="toggle">Toggle</span>}>
      My sidebar
    </Sidebar>
  )

  const button = getByTestId('toggle')
  fireEvent.click(button)

  const content = getByText('My sidebar')

  expect(content).toHaveStyle('width: 68px')
})
