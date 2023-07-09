import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  increment: number
  add: (count: number) => void
}

const Button = ({ increment, add }: ButtonProps) => {
  const handleClick = () => {
    add(increment)
  }
  if(increment === 0) {
    return (
      <ErrorButton onClick={handleClick}>+{ increment }</ErrorButton>
    )
  }
  return (
    <StyledButton onClick={handleClick}>+{ increment }</StyledButton>
  )
}

const StyledButton = styled.button<{ primary?: string }>`
  background: ${props => (props.primary ? 'black' : 'white')};
  color: ${props => (props.primary ? 'white' : 'black')};
`

const ErrorButton = styled(StyledButton)`
  color: yellow;
`

export default Button