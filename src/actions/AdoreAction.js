import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

const homeData = [
  {imgSrc: 'https://drscdn.500px.org/photo/40815510/q%3D80_m%3D1500/e874404bf253ec0d2a3b24713fc0d25e', title:'hello flux', time: Date.now()},

  {imgSrc: 'https://drscdn.500px.org/photo/129441091/q%3D80_m%3D1500/10c4d24ad472e19bd2ee7fcaf9824f8e', title:'fuck flux', time: Date.now()}
];

const photoData = [
  {imgSrc: 'https://drscdn.500px.org/photo/21086277/q%3D80_m%3D1000/3aebfeca27cc55b7e130eff707dd113d', title:'hello flux', describe:'迷人的花香是我对你的倾慕', time: Date.now()},

  {imgSrc: 'https://drscdn.500px.org/photo/20852455/q%3D80_m%3D1000/418313ebb3720af222d67d75c32e2a2f', title:'fuck flux',  describe:'你走吧，你笑吧，你找寻你自己吧', time: Date.now()},
]

// api 的 curd
const AdoreAction = {
  getHome(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_HOME});
    // fetch data by query
    console.log(' start request home');
    setTimeout(function(){
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_HOME, data:homeData[0]});
    }, 2000)
  },

  getPhoto(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_PHOTO});
        // fetch data by query
    console.log(' start request photo');
    setTimeout(function(){
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_PHOTO, data:photoData[0]});
    }, 2000)
  },
  getStory(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_PHOTO});
        // fetch data by query
    console.log(' start request photo');
    setTimeout(function(){
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_PHOTO, data:photoData[0]});
    }, 2000)
  },
  getMusic(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_PHOTO});
        // fetch data by query
    console.log(' start request photo');
    setTimeout(function(){
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_PHOTO, data:photoData[0]});
    }, 2000)
  },

  getBlog(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_PHOTO});
        // fetch data by query
    console.log(' start request photo');
    setTimeout(function(){
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_PHOTO, data:photoData[0]});
    }, 2000)
  },
  getAbout(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_PHOTO});
        // fetch data by query
    console.log(' start request photo');
    setTimeout(function(){
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_PHOTO, data:photoData[0]});
    }, 2000)
  },

  selectTab(newTab) {
    newTab = newTab === '/' ? 'home' : newTab;
    newTab = newTab.replace('/','');
    AppDispatcher.dispatch({
      actionType: ActionTypes.SELECT_TAB, newTab: newTab
    });
  }
};

export default AdoreAction;
