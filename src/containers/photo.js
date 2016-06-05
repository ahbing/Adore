import React from 'react';
import Rectangle from '../components/rectangle';

class Photo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {photo} = this.props;
    const photoList = photo.datas.map( (data, index) => {
      return <Rectangle data={data} key = {index}></Rectangle>
    })
    return (
      <div>
        {photoList}
      </div>
    );
  }
}

export default Photo;
