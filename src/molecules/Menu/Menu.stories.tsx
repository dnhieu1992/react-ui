// Menu.stories.js

import React from 'react'
import Menu from './Menu'
import MenuItem from '../MenuItem/MenuItem'

export default {
  title: 'Components/Menu',
  component: Menu,
}

const Template = (args) => <Menu {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <MenuItem>Home</MenuItem>,
}

export const WithBackgroundColor = Template.bind({})
WithBackgroundColor.args = {
  children: <div>Test Menu</div>,
  sx: { backgroundColor: 'red' },
}

export const WithHeight = Template.bind({})
WithHeight.args = {
  children: <div>Test Menu</div>,
  sx: { height: '50vh' },
}
