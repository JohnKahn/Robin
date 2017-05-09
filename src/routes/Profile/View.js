import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import StoryItem from '../../components/StoryItem';
import config from '../../config';

class Profile extends React.Component {
  render() {
    return (
      <Layout userProfile {...this.props}>
        <div className='mw8 center' >
          <div className='fl w-100 w-70-l'>
            <h1>Stories</h1>
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
          </div>
        </div>
      </Layout>
    );
  }
}

Profile.propTypes = {
  data: PropTypes.shape({
    user: PropTypes.object,
  }),
};

Profile.defaultProps = {
  data: {},
}

export default Profile;
