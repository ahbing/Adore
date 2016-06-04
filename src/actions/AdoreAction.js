import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import {flickr} from '../api/config.js';

const homeData = [
  {imgSrc: 'https://drscdn.500px.org/photo/40815510/q%3D80_m%3D1500/e874404bf253ec0d2a3b24713fc0d25e', title:'hello flux', time: Date.now()},

  {imgSrc: 'https://drscdn.500px.org/photo/129441091/q%3D80_m%3D1500/10c4d24ad472e19bd2ee7fcaf9824f8e', title:'fuck flux', time: Date.now()}
];

const aboutData = [
  {content: 'saysomething I giving upon you', time: Date.now()}
];

const AdoreAction = {

  getHome(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_HOME});
    // fetch data by query
    setTimeout(function(){
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_HOME, data:homeData});
    }, 200)
  },

  getPhoto(query) {
    // 根据 query 修改 flickrUrl
    const flickrUrl = `${flickr.api_url}method=flickr.people.getPhotos&api_key=${flickr.api_key}&user_id=${flickr.user_id}&format=json&nojsoncallback=1`;
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_PHOTO});
    // fetch data
    fetch(flickrUrl).then((response)=>{
      return response.json()
    }).then((json)=>{
      let photos = json.photos.photo;
      // 这里控制显示的照片的数量
      photos.forEach((item)=>{
        let title = item.title;
        fetch(`${flickr.api_url}method=flickr.photos.getSizes&api_key=${flickr.api_key}&photo_id=${item.id}&format=json&nojsoncallback=1`).then((response)=>{
          return response.json()
        }).then((d)=>{
          let url = d.sizes.size[9].source;
          AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVE_PHOTO,
            data: {imgSrc:url, title: title}
          });
        })
      })
    })
  },

  getStory(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_STORY});
        // fetch data by query
    setTimeout(function(){
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_STORY, data:photoData[0]});
    }, 2000)
  },
  getMusic(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_MUSIC});
        // fetch data by query
    setTimeout(function(){
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_MUSIC, data:photoData[0]});
    }, 2000)
  },

  getBlog(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_BLOG});
        // fetch data by query
    setTimeout(function(){
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_BLOG, data:photoData[0]});
    }, 2000)
  },

  getAbout(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_ABOUT});
        // fetch data by query\
    setTimeout(function(){
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_ABOUT, data:aboutData[0]});
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
