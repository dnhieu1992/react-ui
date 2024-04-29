import React from 'react'
import styled from 'styled-components'

export type ButtonProps = {
  backgroundColor?: string
  primary?: boolean
  label?: string
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

export default Button
