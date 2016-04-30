import React from 'react';
import AdoreStore from '../stores/AdoreStore';
import AdoreAction from '../actions/AdoreAction';

// component
import Rectangle from '../components/rectangle';

class Home extends React.Component {

  render() {
    const {home} = this.props;
    let homeList = home.datas.map( (item, index) => {
      return <Rectangle data={item} key={index} ></Rectangle>
    });
    return (
      <div>
        {homeList}
      </div>
    );
  }
}

export default Home;
