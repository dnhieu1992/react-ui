import React from 'react'
import styled from 'styled-components'
import { BsReverseLayoutSidebarReverse } from 'react-icons/bs'

export type SidebarProps = {
  children: React.ReactNode
  showToggleButton?: boolean
  toggleButton?: React.ReactNode
  sx?: Record<string, any>
} & React.HTMLAttributes<HTMLElement>

const ToggleButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`
type StyledSidebarProps = Pick<SidebarProps, 'sx'>
const StyledSidebar = styled.aside<StyledSidebarProps>`
  background-color: #fff;
  height: 100vh;
  ${({ sx }) => sx}
`

const Sidebar: React.FC<SidebarProps> = ({
  showToggleButton,
  toggleButton,
  children,
  sx,
  ...rest
}: SidebarProps) => {
  return (
    <StyledSidebar sx={sx} {...rest}>
      {showToggleButton && (
        <div>
          {toggleButton ? (
            toggleButton
          ) : (
            <ToggleButton>
              <BsReverseLayoutSidebarReverse />
            </ToggleButton>
          )}
        </div>
      )}
      {children}
    </StyledSidebar>
  )
}

export default Sidebar
