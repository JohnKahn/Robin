import React from 'react';
// import NProgress from 'nprogress';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Profile from './Profile';
import SlideBar from './SlideBar';

import robinImg from '../../static/img/robin-o.svg';

// Router.onRouteChangeStart = (url) => {
//   console.log(`Loading: ${url}`)
//   NProgress.start()
// }
// Router.onRouteChangeComplete = () => NProgress.done()
// Router.onRouteChangeError = () => NProgress.done()

class Header extends React.Component {
  render() {
    const { user } = this.props.data;
    const linkStyle = 'f3 f6-ns fw4 hover-white no-underline white-70 dib-ns db ml2 pv2 mv2 mv0-ns ph3';

    return (
      <header className={classNames('sans-serif')} >
        <div className='cover bg-center-l' style={{ backgroundImage: 'url(/header.jpg)' }}>
          <div className={classNames(['bg-black-70 ph3', { 'pb5 pb6-m pb6-l': this.props.hero }])}>
            <nav className='dib w-100 mw8 center'>
              <div className='dib w-50 v-mid pv3'>
                <Link to='/' className='link dib pa1 border-box' >
                  <img className='link di w3 v-mid' src={robinImg} alt='' />
                  <span className='f3 f2-l ml3 white dn dib-ns v-mid'>Round Robin</span>
                </Link>
              </div>
              <div className='w-50 dn dib-ns v-mid tr pv2 pv3-ns'>
                {user ? (
                  <div>
                    <Link to='/stories' className={classNames(linkStyle)} >Stories</Link>
                    <Link to='/logout' className={classNames(linkStyle)} >Logout</Link>
                    <Link to='/profile' className={classNames(linkStyle, 'ba')} >Profile</Link>
                  </div>
                ) : (
                    <div>
                      <Link to='/login' className={classNames(linkStyle)} >Log In</Link>
                      <Link to='/signup' className={classNames(linkStyle, 'ba')} >Sign Up</Link>
                    </div>
                  )}
              </div>
              <div className=' w-50 dn-ns dib v-mid tr pv2 pv3-ns'>
                <SlideBar>
                  {user ? (
                    <div className='tc'>
                      <Link to='/stories' className={classNames(linkStyle)} >Stories</Link><br />
                      <Link to='/logout' className={classNames(linkStyle)} >Logout</Link><br />
                      <Link to='/profile' className={classNames(linkStyle, 'ba')} >Profile</Link>
                    </div>
                  ) : (
                      <div className='tc'>
                        <Link to='/login' className={classNames(linkStyle)} >Log In</Link><br />
                        <Link to='/signup' className={classNames(linkStyle, 'ba')} >Sign Up</Link>
                      </div>
                    )}
                </SlideBar>
              </div>
            </nav>
            {this.props.hero && (
              <div className='tc-l mt4 mt5-m mt6-l ph3'>
                {this.props.headline && <h1 className='f2 f1-l fw4 white-90 mb0 lh-title'>{this.props.headline}</h1>}
                {this.props.subheadline && <h2 className='fw4 f3 white-80 mt3 mb4'>{this.props.subheadline}</h2>}
              </div>
            )}
            {this.props.userProfile && (
              <Profile user={user} />
            )}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  data: PropTypes.shape({
    user: PropTypes.object,
  }),
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  hero: PropTypes.bool,
  userProfile: PropTypes.bool,
};

Header.defaultProps = {
  data: {},
  headline: undefined,
  subheadline: undefined,
  hero: false,
  userProfile: false,
}

export default Header;
