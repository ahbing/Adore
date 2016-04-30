import React from 'react';

import styles from './index.scss';

class Ripple extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    return (
      <div className={styles.ripple}>
        <div className={styles.effect}></div>
      </div>
    );
  }
}

export default Ripple;
