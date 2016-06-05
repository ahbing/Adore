import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import {EventEmitter} from 'events';

let _data = {
  navs: [
    {nav: 'home'},
    {nav: 'photo'},
    {nav: 'blog', out: 'http://huangbingbing.com'},
    {nav: 'about'}
  ],
  isFetching: false,
  currentTab: 'home',
  home: {
    title: 'home',
    subTitle: 'hello stranger!',
    datas: []
  },
  photo: {
    title: 'photo',
    subTitle: 'envisions are different',
    moreLink: 'https://500px.com/givemearainbowlife',
    datas: []
  },
  about: {
    title: 'about',
    subTitle: 'envisions are different',
    datas: []
  }
};

const CHANGE_EVENT = 'change';

const AdoreStore = Object.assign({}, EventEmitter.prototype, {

  getAllData: (option) => {
    if (option) return _data[option];
    return _data;
  },
  getNavs: () => {
    return _data['navs'];
  },
  getIsFetching: () => {
    return _data['isFetching'];
  },
  shouldGetDate: (pathname, query) => {
    pathname = pathname === '/' ? 'home' : pathname;
    pathname = pathname.replace('/', '');
    let datas = _data[pathname].datas;
    if (datas && datas.length) {
      return false;
    }
    if (_data['isFetching']) {
      return false;
    }
    return true;
  },
  emitEvent: () => {
    AdoreStore.emit(CHANGE_EVENT);
  },
  addChangeListener: (callback)=> {
    AdoreStore.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: (callback) => {
    AdoreStore.removeListener(CHANGE_EVENT, callback);
  },
});

AppDispatcher.register((action)=> {
  switch (action.actionType) {
    case ActionTypes.REQUEST_HOME:
    case ActionTypes.REQUEST_PHOTO:
    case ActionTypes.REQUEST_ABOUT:
      _data['isFetching'] = true;
      AdoreStore.emitEvent();
      break;
    case ActionTypes.RECEIVE_HOME:
      _data['isFetching'] = false;
      _data['home']['datas'] = action.data;
      AdoreStore.emitEvent();
      break;
    case ActionTypes.RECEIVE_PHOTO:
      _data['isFetching'] = false;
      _data['photo']['datas'].push(action.data);
      AdoreStore.emitEvent();
      break;
    case ActionTypes.RECEIVE_ABOUT:
      _data['isFetching'] = false;
      _data['about']['datas'].push(action.data);
      AdoreStore.emitEvent();
      break;
    case ActionTypes.SELECT_TAB:
      _data['currentTab'] = action.newTab;
      AdoreStore.emitEvent();
    default:
      break;
  }
});

export default AdoreStore;
