import React from 'react';
import AdoreStore from '../stores/AdoreStore';
import AdoreAction from '../actions/AdoreAction';

// component
import Rectangle from '../components/rectangle';

class Home extends React.Component {
  render() {
    // @todo 根据 home data length 来确定 index， 根据 index 来请求下一个 数据
    // 实现懒加载
    const {home} = this.props;
    let homeList = home.datas.map( (item, index) => {
      return <Rectangle  data={item} key={index} ></Rectangle>
    });
    return (
      <div>
        {homeList}
      </div>
    );
  }
}

export default Home;
