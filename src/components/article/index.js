import React from 'react';
import styles from './index.scss';
const Article = ({about}) => {
  console.log('about', about);
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>hello</h2>
      <p className={styles.content}>{about.content}</p>
      <time>{about.time}</time>
    </article>
  )
}

export default Article;
