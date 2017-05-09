import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    return (
      <div className='flex flex-wrap flex-column min-vh-100 bg-near-white'>
        <Header {...this.props} />
        <div className='flex-auto ph3'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

Layout.defaultProps = {
  children: [],
};

export default Layout;
