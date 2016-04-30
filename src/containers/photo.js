import React from 'react';
import AdoreStore from '../stores/AdoreStore';
import AdoreAction from '../actions/AdoreAction';

import Image from '../components/Image';

const getPhotoDate = () => {
  return AdoreStore.getAllData('photo')
}

class Photo extends React.Component {
  render() {
    const {photo} = this.props;
    const photoList = photo.datas.map( (photo, index) => {
      return <Image photo = {photo} key = {index}></Image>
    })
    return (
      <div>
        {photoList}
      </div>
    );
  }
}
export default Photo;
