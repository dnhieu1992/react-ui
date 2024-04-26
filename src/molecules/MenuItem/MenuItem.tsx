import React from 'react'
import styled, { css } from 'styled-components'

export type MenuItemProps = {
  children: React.ReactNode
  sx?: Record<string, any>
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  component?: React.ComponentType<any>
} & React.HTMLAttributes<HTMLDivElement>

const StyledMenuItem = styled.div<Pick<MenuItemProps, 'sx'>>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  & > .menu-item-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    padding: 8px;
  }
  ${({ sx }) => sx && css(sx)};
`

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  sx,
  startIcon,
  component,
  endIcon,
  ...rest
}: MenuItemProps) => {
  const Component = component || 'a'
  return (
    <StyledMenuItem sx={sx} {...rest}>
      <Component className="menu-item-content">
        {startIcon && <span>{startIcon}</span>}
        <span>{children}</span>
        {endIcon && <span>{endIcon}</span>}
      </Component>
    </StyledMenuItem>
  )
}

export default MenuItem
