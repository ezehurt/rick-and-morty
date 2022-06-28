import classNames from 'classnames'
import React from 'react'
import CardItem from './card-item/CardItem'

function CharacterCard({className, imgSrc, imgAlt, title, status = "unknown", specie, lastKnowLocation, firstSeenIn}) {
  return (
    <div  className={classNames("character-card", { className })}>
        <img src={imgSrc} alt={imgAlt}></img>
        <div className='character-card__content'>
            <h2 className='character-card__title'>{title}</h2>
            <div className='character-card__subtitle'>
                <div className={classNames('character-status',  `character-status--${status.toLowerCase()}` )}></div>
                <p>{status} - {specie}</p>
            </div>
            <CardItem title={"Last known Location"} description={lastKnowLocation}/>
            <CardItem title={"First seen in"} description={firstSeenIn}/>
        </div>
    </div>
  )
}

export default CharacterCard