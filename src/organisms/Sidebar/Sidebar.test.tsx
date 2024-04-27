import React from 'react'
import { render } from '@testing-library/react'
import Sidebar from './Sidebar'
import Menu from '../../molecules/Menu/Menu'
import MenuItem from '../../molecules/MenuItem'

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
    <Sidebar sx={{ backgroundColor: 'blue' }}>
      Home
      {/* <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Profile</MenuItem>
      </Menu> */}
    </Sidebar>
  )
  expect(getByText('Home')).toHaveStyle('background-color: blue')
})
