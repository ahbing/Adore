import React from 'react';

function Image({photo}) {
  return (
    <div>
      <img src={photo.imgSrc}/>
      <p>{photo.describe}</p>
    </div>
  )
}

export default Image;
