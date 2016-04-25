import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

const AdoreAction = {
  getAtricles(){
    AppDispatcher.dispatch({
      actionType: ActionTypes.REQUEST_ARTICAL
    })
  },
  getImages(){
    AppDispatcher.dispatch({
      actionType: ActionTypes.REQUEST_IMAGES
    })
  }
};

export default AdoreAction;
