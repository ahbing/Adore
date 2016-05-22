import React from 'react';
import RefreshIndicator from 'material-ui/lib/refresh-indicator';
import styles from './index.scss';

const style = {
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

function Loading() {
  return (
    <div className={styles.container}>
      <RefreshIndicator
        size={50}
        left={0}
        top={0}
        loadingColor={"#FF9800"}
        status="loading"
        style={style.refresh}
      />
    </div>
  );
}

export default Loading;
