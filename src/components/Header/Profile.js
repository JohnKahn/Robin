import React from 'react';
import PropTypes from 'prop-types';

class Profile extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div className='mw8 center mt2 mt3-m mt4-l'>
        <div className='white pv4' >
          <div className='br3 bg-white dib pa1'>
            <img className='br3 b--white w3 w4-ns dib v-mid' src={user.profileImage || '/defaultProfileImage.jpg'} alt='Profile Image' />
          </div>
          <div className='dib pl2 pl4-ns v-mid' >
            <p className='f3 f2-ns ma0' >{user.name || 'Loading...'}</p>
            <p className='f4 tracked ma0' >{user.username ? '@' + user.username: '' }</p>
          </div>
          <div className='cf' >
            <dl className='f1 fn-ns w-50 dib w-auto-ns lh-title ma0 mt4 mr5-ns'>
              <dd className="f6 fw4 ml0">Words Written</dd>
              <dd className="f3 fw6 ml0">3,585</dd>
            </dl>
            <dl className='f1 fn-ns w-50 dib w-auto-ns lh-title ma0 mt4 mr5-ns'>
              <dd className="f6 fw4 ml0">Stories</dd>
              <dd className="f3 fw6 ml0">8</dd>
            </dl>
            <dl className='f1 fn-ns w-50 dib w-auto-ns lh-title ma0 mt4 mr5-ns'>
              <dd className="f6 fw4 ml0">Points</dd>
              <dd className="f3 fw6 ml0">4,390</dd>
            </dl>
            <dl className='f1 fn-ns w-50 dib w-auto-ns lh-title ma0 mt4 mr5-ns'>
              <dd className="f6 fw4 ml0">Followers</dd>
              <dd className="f3 fw6 ml0">37</dd>
            </dl>
            <dl className='f1 fn-ns w-50 dib w-auto-ns lh-title ma0 mt4 mr5-ns'>
              <dd className="f6 fw4 ml0">Following</dd>
              <dd className="f3 fw6 ml0">42</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object,
};

Profile.defaultProps = {
  user: {}
}

export default Profile;
