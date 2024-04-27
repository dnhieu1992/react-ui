import React from 'react'
import Menu from './Menu'
import MenuItem from '../MenuItem/MenuItem'
import { render } from '@testing-library/react'

test('renders Menu component', () => {
  const { getByText } = render(
    <Menu>
      <div>Test Menu</div>
    </Menu>
  )
  expect(getByText('Test Menu')).toBeInTheDocument()
})

test('applies styles from sx prop', () => {
  const { getByText } = render(
    <Menu sx={{ backgroundColor: 'blue' }}>Test Menu</Menu>
  )
  expect(getByText('Test Menu')).toHaveStyle('background-color: blue')
})

// test('overrides default styles with sx prop', () => {
//   const { getByText } = render(
//     <Menu sx={{ height: '50vh' }}>
//       <div>Test Menu</div>
//     </Menu>
//   )
//   expect(getByText('Test Menu')).toHaveStyle('height: 50vh')
// })

test('renders multiple children', () => {
  const { getByText } = render(
    <Menu>
      <div>Child 1</div>
      <div>Child 2</div>
    </Menu>
  )
  expect(getByText('Child 1')).toBeInTheDocument()
  expect(getByText('Child 2')).toBeInTheDocument()
})

// test('custom toggle button', () => {
//   const { getByText } = render(
//     <Menu toggleButton={<div>Toggle Button</div>}>
//       <div>Test Menu</div>
//     </Menu>
//   )
//   expect(getByText('Toggle Button')).toBeInTheDocument()
// })
