import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';

class Logout extends React.Component {
  componentWillMount() {
    window.localStorage.removeItem(config.userTokenName);
    this.props.history.push('/');
  }

  render() {
    return null;
  }
}

Logout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default Logout;
