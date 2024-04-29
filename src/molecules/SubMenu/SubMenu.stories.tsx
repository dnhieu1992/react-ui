// SubMenu.stories.js
import React from 'react'
import SubMenu from './SubMenu'

export default {
  title: 'Molecules/SubMenu',
  component: SubMenu,
}

const Template = (args) => <SubMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <div>Personal</div>,
}
