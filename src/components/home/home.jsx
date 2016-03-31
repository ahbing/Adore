import React from 'react';
import AdoreStore from '../../stores/AdoreStore';
import NavTabs from  './../nav/nav';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = AdoreStore.getState();
  }

  componentDidMount() {
    AdoreStore.addChangeListener(function(){
      // 更新 state
    });
    console.log('组件加载到dom');
  }
  componentWillUnmount() {
    AdoreStore.removeChangeListener(function(){
      // 回调同上
    });
  }
  render() {
    return (
      <div>
        <NavTabs />
        123
      </div>
    )
  }
}

export default Home;
