import React from 'react';
import styles from './index.scss';
const Article = ({data}) => {
  let time = new Date(data.time);
  let year = time.getFullYear();
  let month = time.getMonth()+1;
  let day = time.getDate();
  let praseTime = `${year} 年 ${month} 月 ${day} 日`;
  let contents = data.content.map((item, index) => {
    return <p key={index} className={styles.content}>{item}</p>
  })
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{data.title}</h1>
      {contents}
      <time className={styles.time}>{praseTime}</time>
    </article>
  )
}

export default Article;
