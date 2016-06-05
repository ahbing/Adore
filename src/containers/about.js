import React from 'react';
import Article from '../components/article';

class About extends React.Component {
  render() {
    const {about} = this.props;
    const articleList = about.datas.map( (data, index) => {
      return <Article data = {data} key = {index}></Article>
    })
    return (
      <div>
        {articleList}
      </div>
    );
  }
}

export default About;
