// Menu.stories.js

import React from 'react'
import MenuItem from './MenuItem'

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
}

const Template = (args) => <MenuItem {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Home',
}
