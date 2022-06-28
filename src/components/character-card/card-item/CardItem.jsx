import React from 'react'

function CardItem({title, description}) {
  return (
    <div className='card-item'>
        <h4 className='card-item__title'>{title}</h4>
        <p className='card-item__description'>{description}</p>
    </div>
  )
}

export default CardItem