import React from 'react';

import Image from '../components/Image';

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
