// Menu.stories.js

import React from 'react'
import MenuItem from './MenuItem'

export default {
  title: 'Molecules/MenuItem',
  component: MenuItem,
}

const Template = (args) => <MenuItem {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Home',
}

export const WithBackgroundColor = Template.bind({})
WithBackgroundColor.args = {
  children: 'Test Menu',
  sx: { backgroundColor: 'red' },
}
