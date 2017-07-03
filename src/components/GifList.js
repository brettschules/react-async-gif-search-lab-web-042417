import React from 'react'

const GifList = ({gifs}) => {
  return (
    <ul>
      {gifs.map( gif => (
        <img src={`https://media.giphy.com/media/${gif.id}/giphy.gif`}/>
      ))}
    </ul>
  )
}

export default GifList
