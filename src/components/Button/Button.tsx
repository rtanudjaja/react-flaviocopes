import React from 'react'

interface ButtonProps {
  increment: number
  add: (count: number) => void
}

const Button = ({ increment, add }: ButtonProps) => {
  const handleClick = () => {
    add(increment)
  }
  return (
    <button onClick={handleClick}>+{ increment }</button>
  )
}

export default Button