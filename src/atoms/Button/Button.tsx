import React from 'react'
import styled, { useTheme } from 'styled-components'

type ButtonProps = {
  backgroundColor?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled.button<ButtonProps>``

const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledButton backgroundColor={backgroundColor} {...props}>
      {children}
    </StyledButton>
  )
}

export default React.memo(Button)
