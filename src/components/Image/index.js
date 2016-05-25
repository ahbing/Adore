import React from 'react';
import styles from './index.scss';

function Image({photo}) {
  return (
    <div className={styles.img_item}>
      <img src={photo.imgSrc}/>
      <p>{photo.title}</p>
    </div>
  )
}

export default Image;
