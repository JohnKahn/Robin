import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';

class StoryItem extends React.Component {
  render() {
    return (
      <Link to={'#'} className='w-100 bg-white-90 hover-bg-white black-80 hover-black no-underline br3 pa3 pa4-ns mb3 mb4-ns ba b--black-10 dib'>
        <h1 className='f4 fw2 mt0'>Story Title</h1>
        <div>
          <Truncate lines={3} ellipsis={'...'}>
            Morbi iaculis nibh non elit scelerisque ultrices. Duis vestibulum augue molestie odio egestas, at efficitur ipsum sagittis. Praesent leo turpis, vehicula ac dolor nec, ultricies porta lectus. Nulla pretium magna ipsum, quis feugiat libero elementum sit amet. Curabitur vitae eros euismod, sodales leo a, molestie arcu. Ut dictum et nunc sit amet tincidunt. Suspendisse potenti. In fringilla venenatis risus et.
            </Truncate>
        </div>
      </Link>
    );
  }
}

StoryItem.propTypes = {
  user: PropTypes.object,
};

StoryItem.defaultProps = {
  user: {}
}

export default StoryItem;
