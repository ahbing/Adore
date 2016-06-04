import React from 'react';
import styles from './index.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);


class Rectangle extends React.Component {
  constructor(props) {
    super(props);
    this._lazyLoadImg = this._lazyLoadImg.bind(this);
    this.rectanglesImg = [];
  }
  componentDidMount() {
    let body = document.body;
    let rectanglesImg = body.querySelectorAll(`.${styles.img}`)
    this.rectanglesImg = Array.prototype.slice.call(rectanglesImg);
    //增加事件监听 懒加载
    this._lazyLoadImg();
    window.addEventListener('scroll', this._lazyLoadImg, false);
  }

  compomentWillUnmount() {
    window.removeEventListener('scroll', this._lazyLoadImg, false);
  }

  _lazyLoadImg() {
    let rectanglesImg = this.rectanglesImg;
    let hasScrollTop = window.innerHeight + document.body.scrollTop;
    for(let i = 0, len = this.rectanglesImg.length; i < len; i++){
      let src = rectanglesImg[i].getAttribute('src');
      if (src) continue;
      if (rectanglesImg[i].offsetParent.offsetTop < hasScrollTop) {
        let dataSrc = rectanglesImg[i].getAttribute('data-src');
        rectanglesImg[i].setAttribute('src', dataSrc);
        break;
      }
    }
  }
  render() {
    let classNameForItem = cx({
      rectangle: true,
    });
    let classNameForTitle = cx({
      title: true
    });
    let classNameForImg = cx({
      img: true,
    });
    const {data} = this.props
    return (
      <div className={classNameForItem}>
        <h2 className={classNameForTitle}>{data.title}</h2>
        <img className={classNameForImg} data-src={data.imgSrc}/>
      </div>
    )
  }
}


export default Rectangle;
