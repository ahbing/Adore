import React from 'react';
import Ripple from '../ripple';
import styles from './index.scss';

import { Link } from 'react-router';

const NavTabs = ({topic,color})=>(
  <header className={styles.header}>
    <div className={styles.navBox}>
      <Link to="/"><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png" /></Link>
      <aside className={styles.navList}>
        <ul>
          <li className={styles.curItem}><Link to="/">HOME</Link></li>
          <li><Link to="music">MUSIC</Link></li>
          <li><Link to="photo">PHOTO</Link></li>
          <li><Link to="blog">BLOG</Link></li>
          <li><Link to="story">STORY</Link></li>
          <li><Link to="about">ABOUT</Link></li>
        </ul>
      </aside>
    </div>
    <h1 className={styles.topic}>{topic}</h1>
  </header>
);

export default NavTabs;
