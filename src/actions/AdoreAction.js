import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import {flickr} from '../api/config.js';

const homeData = [
  {imgSrc: 'https://drscdn.500px.org/photo/40815510/q%3D80_m%3D1500/e874404bf253ec0d2a3b24713fc0d25e', title:'把全部的诗意献给你', time: Date.now()},
];

const aboutData = [
  {
    title:'迷人的花香是我对你的倾慕',
    content:[
      '迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕',
      '迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕迷人的花香是我对你的倾慕'
    ],
    time: Date.now()}
];

const AdoreAction = {
  getHome(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_HOME});
    setTimeout(() => {
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_HOME, data:homeData});
    }, 0);

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
  getAbout(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_ABOUT});
    setTimeout(() => {
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_ABOUT, data:aboutData[0]});
    }, 0);
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
