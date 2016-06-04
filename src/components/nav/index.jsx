import React from 'react';
import Ripple from '../ripple';
import styles from './index.scss';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

class NavTabs extends React.Component {
  constructor(props) {
    console.log('props in nav', props);
    super(props);
    this.state = {
      shouldFixHeader: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this._onWindowScroll.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onWindowScroll.bind(this), false);
  }

  _onWindowScroll() {
    const body = document.body;
    if (body.offsetWidth > 1024) {
      if (body.scrollTop > 0) {
        this.setState({
          shouldFixHeader: true
        })
      } else {
        this.setState({
          shouldFixHeader: false
        })
      }
    }
  }

  render() {
    const {navs, currentTab} = this.props;
    const {shouldFixHeader} = this.state;

    let headerClassName = cx({
      header: true,
      fix_header: shouldFixHeader
    });

    let navClassName = cx({
      navBox: true,
      fix_navBox: shouldFixHeader
    })
    let topicClassName = cx({
      topic: true,
      fix_topic: shouldFixHeader
    })
    let ahbingClassName = cx({
      ahbing: true,
      fix_ahbing: shouldFixHeader
    })
    const navList = navs.map( (item, index) => {
      let curLiClassName = cx({
        currentLi: item.nav == currentTab
      })
      return (<li key={index} className={curLiClassName}><Link to={item.nav}>{item.nav.toUpperCase()}</Link></li>)
    });
    let subTitle = this.props[currentTab].subTitle;
    return (
      <header className={headerClassName} ref={ (c) => {
            // console.log('ccccccc ======',c);
          }}>
        <div className={navClassName}>
          <Link className={ahbingClassName} to={'/'}>AHBING</Link>
          <aside className={styles.navList}>
            <ul>
              {navList}
            </ul>
          </aside>
        </div>
        <h1 className={topicClassName}>{subTitle}</h1>
      </header>
    );
  }
}

export default NavTabs;
