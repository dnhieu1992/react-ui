import React from 'react'
import styled from 'styled-components'
import { BsReverseLayoutSidebarReverse } from 'react-icons/bs'

export type SidebarProps = {
  showToggleButton?: boolean
  toggleButton: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

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

const Sidebar: React.FC<SidebarProps> = ({
  showToggleButton,
  toggleButton,
}: SidebarProps) => {
  return (
    <div>
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
    </div>
  )
}

export default Sidebar
