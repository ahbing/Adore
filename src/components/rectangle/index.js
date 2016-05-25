import React from 'react';
import styles from './index.scss';

function Rectangle({data}) {
  return (
    <div className={styles.rectangle}>
      <h2 className={styles.title}>{data.title}</h2>
      <img src={data.imgSrc}/>
    </div>
  )
};

export default Rectangle;
