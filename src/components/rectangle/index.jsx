import React from 'react';
import styles from './index.scss';

class Rectangle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props
    return (
      <div className={styles.rectangle}>
        <h2 className={styles.title}>{data.title}</h2>
        <img className={styles.img} data-src={data.imgSrc}/>
      </div>
    )
  }
}


export default Rectangle;
