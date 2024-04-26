import React from 'react'
import styled, { css } from 'styled-components'

export type MenuProps = {
  children: React.ReactNode
  showToggleButton?: boolean
  toggleButton?: React.ReactNode
  sx?: Record<string, any>
} & React.HTMLAttributes<HTMLDivElement>

const StyledMenu = styled.div<MenuProps>`
  background-color: #fff;
  height: 100vh;
  position: fixed;
  left: 0;
  width: 100%;
  padding: 8px 16px;
  ${({ sx }) => sx && css(sx)};
`

const Menu: React.FC<MenuProps> = ({
  children,
  sx,
  showToggleButton = true,
  toggleButton,
  ...rest
}: MenuProps) => {
  return (
    <StyledMenu sx={sx} {...rest}>
      {children}
    </StyledMenu>
  )
}

export default Menu
