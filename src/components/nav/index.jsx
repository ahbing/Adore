import React from 'react';
import Ripple from '../ripple';
import styles from './index.scss';
import { Link } from 'react-router';

const NavTabs = ({navs, currentTab}) => {

  const navList = navs.map( (item, index) => {
    return (<li key={index}><Link to={item.nav}>{item.nav.toUpperCase()}</Link></li>)
  })

  return (
    <header className={styles.header} ref={ (c) => {
          console.log('ccccccc ======',c);
        }}>
      <div className={styles.navBox}>
        <Link to={'/'}><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png" /></Link>
        <aside className={styles.navList}>
          <ul>
            {navList}
          </ul>
        </aside>
      </div>
      <h1 className={styles.topic}>{currentTab}</h1>
    </header>
  );
}

export default NavTabs;
