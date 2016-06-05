import React from 'react';
import styles from './index.scss';

import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function More({moreLink, isFetching}) {
  let moreClassName = cx({
    more_box: !isFetching,
    hidden: isFetching || !moreLink
  })
  return (
    <div className={moreClassName}>
      <a target="_blank" className={styles.more_text} href={moreLink}>再多一些</a>
    </div>
  )
}

export default More;
