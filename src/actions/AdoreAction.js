import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

const homeData = [
  {imgSrc: 'https://drscdn.500px.org/photo/40815510/q%3D80_m%3D1500/e874404bf253ec0d2a3b24713fc0d25e', title:'hello flux', time: Date.now()},

  {imgSrc: 'https://drscdn.500px.org/photo/129441091/q%3D80_m%3D1500/10c4d24ad472e19bd2ee7fcaf9824f8e', title:'fuck flux', time: Date.now()}
];

const photoData = [
  {imgSrc: 'https://drscdn.500px.org/photo/21086277/q%3D80_m%3D1000/3aebfeca27cc55b7e130eff707dd113d', title:'hello flux', describe:'迷人的花香是我对你的倾慕', time: Date.now()},

  {imgSrc: 'https://drscdn.500px.org/photo/20852455/q%3D80_m%3D1000/418313ebb3720af222d67d75c32e2a2f', title:'fuck flux',  describe:'你走吧，你笑吧，你找寻你自己吧', time: Date.now()},
];

const aboutData = [
  {content: 'saysomething I giving upon you', time: Date.now()}
];

const api = ' https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=5d6a54435c9da0c091e94cf2232e94eb&user_id=142832811%40N05&format=json&nojsoncallback=1&auth_token=72157668680714806-169f97baafdede88&api_sig=fce46b16375a7ef5ff3d9049f7ab0fc5'



// api 的 curd
const AdoreAction = {
  getHome(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_HOME});
    // fetch data by query
    setTimeout(function(){
      AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_HOME, data:homeData[0]});
    }, 2000)
  },

  getPhoto(query) {
    AppDispatcher.dispatch({actionType: ActionTypes.REQUEST_PHOTO});
        // fetch data by query
    fetch(api).then((response)=>{
      return response.json()
    }).then((json)=>{
      console.log(json.photos.photo)
      let photos = json.photos.photo;

      photos.forEach((item)=>{
        console.log(item.id);
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=5d6a54435c9da0c091e94cf2232e94eb&photo_id=${item.id}&format=json&nojsoncallback=1&auth_token=72157668680714806-169f97baafdede88&api_sig=778f734df53aa1c9c0f828df88816b50`).then((r)=>{
          return r.json()
        }).then((d)=>{
          console.log('dddd', d);
          console.log(d.sizes.size[9].source)
          let url = d.sizes.size[9].source;
          AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_PHOTO, data: {imgSrc:url}});
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
