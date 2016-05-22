import React from 'react';

const Article = ({about}) => {
  console.log('about', about);
  return (
    <div>
      <p>{about.content}</p>
      <time>{about.time}</time>
    </div>
  )
}

export default Article;
