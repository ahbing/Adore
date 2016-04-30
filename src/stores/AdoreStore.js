import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import {EventEmitter} from 'events';

// 这里可以定义 一些操作数据的方法 curd 之
let _data = {
  navs: [
    {nav: 'story'},
    {nav: 'music'},
    {nav: 'photo'},
    {nav: 'blog'},
    {nav: 'about'}
  ],
  isFetching: false,
  currentTab: 'home',
  home: {
    title: 'home',
    datas: []
  },
  photo: {
    title: 'photo',
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
    return !_data['isFetching'];
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
      console.log('this _data ===', _data);
      _data['isFetching'] = true;
      AdoreStore.emitEvent();
      break;
    case ActionTypes.RECEIVE_HOME:
      _data['isFetching'] = false;
      _data['home']['datas'].push(action.data);
      AdoreStore.emitEvent();
      break;
    case ActionTypes.RECEIVE_PHOTO:
      _data['isFetching'] = false;
      _data['photo']['datas'].push(action.data);
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
