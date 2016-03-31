import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import {EventEmitter} from 'events';

// 这里可以定义 一些操作数据的方法 curd 之类

const CHANGE_EVENT = 'change';

const AdoreStore = Object.assign({}, EventEmitter.prototype, {
  getState: ()=> {
    return { title: 'adore' };
  },
  emitEvent: () => {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: (callback)=> {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: (callback) => {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register((action)=> {
  switch (action.actionType) {
    case ActionTypes.REQUEST_ARTICAL:
      // do something
      // emit event
      AdoreStore.emitEvent(/*eventType*/'done');
      break;
    case ActionTypes.REQUEST_IMAGES:
      // do somethings
      // emit event
      break;
    default:
    // no op
  }
});

export default AdoreStore;
