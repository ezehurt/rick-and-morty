import React from 'react'
function Message({imgSrc, imgAlt,  title, message}) {
    return (
        <div className='message'>
            <img className='message__image' src={imgSrc} alt={imgAlt}/>
            <h3 className='message__title'>{title}</h3>
            <p className='message__message'>{message}</p>
        </div>
    )
}

export default Message