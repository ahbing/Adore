import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import {EventEmitter} from 'events';

// 这里可以定义 一些操作数据的方法 curd 之
let _data = {
  navs: [
    // {nav: 'story'},
    // {nav: 'music'},
    {nav: 'home'},
    {nav: 'photo'},
    // {nav: 'blog'},
    {nav: 'about'}
  ],
  isFetching: false,
  currentTab: 'home',
  home: {
    title: 'home',
    subTitle: 'Hello Stranger!',
    datas: []
  },
  photo: {
    title: 'photo',
    subTitle: 'envisions are different',
    datas: []
  },
  music: {
    title: 'music',
    datas: []
  },
  story: {
    title: 'story',
    datas: []
  },
  about: {
    title: 'about',
    datas: []
  },
  blog: {
    title: 'blog',
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
    case ActionTypes.REQUEST_MUSIC:
    case ActionTypes.REQUEST_ABOUT:
    case ActionTypes.REQUEST_STORY:
    case ActionTypes.REQUEST_BLOG:
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

    case ActionTypes.RECEIVE_STORY:
      _data['isFetching'] = false;
      _data['photo']['datas'].push(action.data);
      AdoreStore.emitEvent();
      break;

    case ActionTypes.RECEIVE_MUSIC:
      _data['isFetching'] = false;
      _data['photo']['datas'].push(action.data);
      AdoreStore.emitEvent();
      break;

    case ActionTypes.RECEIVE_BLOG:
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
