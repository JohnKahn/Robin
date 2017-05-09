import React from 'react';
import PropTypes from 'prop-types';

import '../../static/hamburgers.min.css';

class SlideBar extends React.Component {
  hamburgerClick = () => {
    const hamburger = document.getElementById('hamburger');
    const slidebar = document.getElementById('slidebar');
    const body = document.querySelector('body');
    hamburger.classList.toggle('is-active');
    slidebar.classList.toggle('left-100');
    slidebar.classList.toggle('left-0');
    body.classList.toggle('overflow-hidden');
  }

  render() {
    return (
      <div>
        <button id='hamburger' className="hamburger hamburger--spin outline-0 z-5 relative" onClick={this.hamburgerClick} type="button">
          <span className="hamburger-box v-mid pr3">
            <span className="hamburger-inner"></span>
          </span>
          <span className='f4 white v-mid'>Menu</span>
        </button>
        <div id='slidebar' className='fixed w-100 h-100 bg-black-60 top-0 left-100 transition-all'>
          <div className='fr w-90 h-100 pa3 pt6 bg-near-black'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

SlideBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
};

SlideBar.defaultProps = {
  children: []
}

export default SlideBar;
