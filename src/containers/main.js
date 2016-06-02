import React from 'react';
import AdoreStore from '../stores/AdoreStore';
import AdoreAction from '../actions/AdoreAction';

// component
import NavTabs from  '../components/nav';
import Loading from '../components/loading';
import Footer from '../components/footer';

const getGlobalState = () => {
  return AdoreStore.getAllData();
}

/*
  getDataBySelectTab 根据选择的 selectTab 来进行获取相应数据
  @params {String} 选择的 tab
  @params {Object} 进行查询的 query
*/
const getDataBySelectTab = (selectTab, query) => {
  if (!AdoreStore.shouldGetDate(selectTab)) return;
  selectTab = selectTab === '/' ? 'home' : selectTab;
  selectTab = selectTab.replace('/', '');
  // 首字母大写
  selectTab = selectTab.charAt(0).toUpperCase() + selectTab.slice(1);
  // action 提供的方法类似 getHome
  let funName = `get${selectTab}`;
  AdoreAction[funName](query);
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
    this._onChange = this._onChange.bind(this);
    this.state = getGlobalState();
  }

  componentWillMount() {
    const {location} = this.props;
    let tapName = location.pathname;
    AdoreAction.selectTab(tapName);
    getDataBySelectTab(tapName);
  }

  componentDidMount() {
    AdoreStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AdoreStore.removeChangeListener(this._onChange);
  }

  componentWillReceiveProps(nextProp) {
    const {location} = nextProp;
    let nextPathname = location.pathname;
    let curPathname = this.props.location.pathname;
    if ( nextPathname === curPathname) return;
    AdoreAction.selectTab(nextPathname);
    getDataBySelectTab(nextPathname);
  }

  _onChange(e) {
    this.setState(getGlobalState());
  }

  _onClick(e) {
    const {pageX, pageY, clientX, clientY} = e;
  }

  render() {
    const {home, photo, about, navs, currentTab, isFetching} = this.state;
    let propObj = this.state;
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, propObj));
    return (
      <div onClick={this._onClick}>
        <NavTabs currentTab={currentTab} navs={navs} />
        { isFetching && <Loading/>}
        <div>{childrenWithProps}</div>
        <Footer isFetching={isFetching} />
      </div>
    );
  }
}

export default Main;
