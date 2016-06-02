import React from 'react';
import styles from './index.scss';

import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const Footer = ({isFetching}) => {
  let year = new Date().getFullYear();
  let footerClassName = cx({
    hidden: isFetching,
    footer: !isFetching
  })
  return (
    <footer className={footerClassName}>
      <p className={styles.footerLine}>
        <span className={styles.left}>迷人的花香是我对你的倾慕 &copy; {year}</span>
        <span className={styles.right}><a href="http://huangbingbing.com">Ahbing</a> • <a href="https://github.com/ahbing/adore">倾慕</a></span>
      </p>
    </footer>
  )
}

export default Footer;
