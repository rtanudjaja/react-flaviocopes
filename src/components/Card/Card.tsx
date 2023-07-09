import React from 'react';
import './Card.css';

interface CardProps {
  avatar_url: string
  name: string
  blog: string
}

const Card = (props: CardProps) => {
  return (
    <div className='card'>
      <img src={props.avatar_url} alt={props.name.concat('-avatar')} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.blog}</div>
      </div>
    </div>
  )
}

export default Card