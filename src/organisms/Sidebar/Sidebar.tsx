import React, { useState } from 'react'
import ToggleContext from '../../contexts/ToggleContext'
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
type StyledSidebarProps = Pick<SidebarProps, 'sx'> & { toggle: string }
const StyledSidebar = styled.aside<StyledSidebarProps>`
  background-color: #fff;
  height: 100vh;
  height: 100%;
  box-sizing: border-box;
  font-family: 'inherit';
  color: #000;
  padding: 0 10px;
  box-shadow: 0 3px 13px 0 rgba(18, 43, 70, 0.1);
  transition: width 0.2s;
  width: ${({ toggle }) => (toggle === 'true' ? '68px' : '230px')};
  ${({ sx }) => sx};
`

const Sidebar: React.FC<SidebarProps> = ({
  showToggleButton = true,
  toggleButton,
  children,
  sx,
  ...rest
}: SidebarProps) => {
  const [toggle, setToggle] = useState(false)

  return (
    <ToggleContext.Provider value={toggle}>
      <StyledSidebar toggle={toggle.toString()} sx={sx} {...rest}>
        {showToggleButton && (
          <div onClick={() => setToggle(!toggle)}>
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
    </ToggleContext.Provider>
  )
}

export default Sidebar
