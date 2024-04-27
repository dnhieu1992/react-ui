import React from 'react'
import styled, { css } from 'styled-components'

export type MenuItemProps = {
  children: React.ReactNode
  showToggleButton?: boolean
  toggleButton?: React.ReactNode
  sx?: Record<string, any>
} & React.HTMLAttributes<HTMLDivElement>

const StyledMenuItem = styled.div<MenuItemProps>`
  background-color: #fff;
  height: 100vh;
  position: fixed;
  left: 0;
  width: 100%;
  padding: 8px 16px;
  ${({ sx }) => sx && css(sx)};
`

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  sx,
  showToggleButton = true,
  toggleButton,
  ...rest
}: MenuItemProps) => {
  return (
    <StyledMenuItem sx={sx} {...rest}>
      {children}
    </StyledMenuItem>
  )
}

export default MenuItem
