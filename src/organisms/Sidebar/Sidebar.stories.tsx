import React from 'react'
import Sidebar from './Sidebar'
import Menu from '../../molecules/Menu'
import MenuItem from '../../molecules/MenuItem'
import SubMenu from '../../molecules/SubMenu'
import { FaUser, FaGraduationCap } from 'react-icons/fa'
import { LuActivitySquare } from 'react-icons/lu'
import { MdOutlineInbox } from 'react-icons/md'
import { VscCommentDiscussion } from 'react-icons/vsc'
import { FaUserGroup } from 'react-icons/fa6'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
}

const Template = (args) => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <Menu>
      <SubMenu title="Personal">
        <MenuItem startIcon={<FaUser size={18} />}>My Profile</MenuItem>
        <MenuItem startIcon={<LuActivitySquare fontSize={18} />}>
          My Timeline
        </MenuItem>
        <MenuItem startIcon={<MdOutlineInbox fontSize={18} />}>Inbox</MenuItem>
      </SubMenu>
      <SubMenu title="Community">
        <MenuItem startIcon={<FaUserGroup fontSize={18} />}>My Groups</MenuItem>
        <MenuItem startIcon={<FaUserGroup fontSize={18} />}>
          My Connections
        </MenuItem>
        <MenuItem startIcon={<VscCommentDiscussion fontSize={18} />}>
          My Discussions
        </MenuItem>
        <MenuItem startIcon={<FaGraduationCap fontSize={18} />}>
          My Courses
        </MenuItem>
      </SubMenu>
    </Menu>
  ),
}
