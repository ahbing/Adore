import React from 'react';
import AdoreStore from '../stores/AdoreStore';
// import NavTabs from  '../components/nav';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = AdoreStore.getState();
    // this._onChange = this._onChange.bind(this);
  }
  // componentDidMount() {
  //   AdoreStore.addChangeListener(this._onChange);
  // }

  // componentWillUnmount() {
  //   AdoreStore.removeChangeListener(this._onChange);
  // }

  // _onChange() {}

  render() {
    return (
      <div>
        这是 home
      </div>
    );
  }
}

export default Home;
