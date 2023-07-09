import React, { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../../App';
import './style.css';

interface CardProps {
  avatar_url: string
  name: string
  blog: string
}

const Card = (props: CardProps) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className={`card ${theme}`}>
      <img src={props.avatar_url} alt={props.name.concat('-avatar')} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.blog}</div>
      </div>
    </div>
  )
}

export default Card