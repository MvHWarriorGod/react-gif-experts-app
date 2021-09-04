import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    //console.log()
    return (
        <div className='card  animate__bounce animate__fadeIn'>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
