import React from 'react'
import styled, { css } from 'styled-components'

export type SubMenuProps = {
  children: React.ReactNode
  title: string
  icon?: React.ReactNode | JSX.Element
  sx?: Record<string, any>
} & React.HTMLAttributes<HTMLDivElement>

const StyledSubMenu = styled.div<Pick<SubMenuProps, 'sx'>>`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  ${({ sx }) => sx && css(sx)};
`
const StyledSubMenuTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  & > .sub-menu-title {
    color: #000;
    text-transform: uppercase;
    font-size: 14px;
  }
`

const SubMenu: React.FC<SubMenuProps> = ({
  title,
  icon,
  children,
  sx,
  ...rest
}: SubMenuProps) => {
  return (
    <StyledSubMenu sx={sx} {...rest}>
      <StyledSubMenuTitle>
        {icon && icon}
        <span className="sub-menu-title">{title}</span>
      </StyledSubMenuTitle>
      {children}
    </StyledSubMenu>
  )
}

export default SubMenu
