import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import ToggleContext from '../../contexts/ToggleContext'

export type MenuItemProps = {
  children: React.ReactNode
  sx?: Record<string, any>
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  component?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

const StyledMenuItem = styled.div<Pick<MenuItemProps, 'sx'>>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  font-family: 'inherit';
  font-weight: 400;
  text-transform: capitalize;
  box-sizing: border-box;

  &:hover {
    background-color: #e1e1e1;
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
  const toggle = useContext(ToggleContext) || false
  return (
    <StyledMenuItem sx={sx} {...rest}>
      {!toggle && component && component}
      {startIcon && startIcon}
      {!toggle && children}
      {!toggle && endIcon && endIcon}
    </StyledMenuItem>
  )
}

export default MenuItem
