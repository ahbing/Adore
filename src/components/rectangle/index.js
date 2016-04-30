import React from 'react';

function Rectangle({data}) {
  return (
    <div>
      <h2>{data.title}</h2>
      <img src={data.imgSrc}/>
    </div>
  )
};

export default Rectangle;
