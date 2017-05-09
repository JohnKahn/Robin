import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import Form from './components/Form';
import config from '../../config';

class Signup extends React.Component {
  loadingTimer;
  state = {
    apolloError: false
  }

  componentWillReceiveProps(nextProps) {
    const { loading, user } = nextProps.data;
    
    if (!loading && user) {
      this.props.history.push('/');
    }
  }

  _onSubmit = (model) => {
    const { email, password } = model;

    this.props.createUser({ variables: model })
    .then(() => {
      this.props.signinUser({ variables: { email, password } })
      .then(response => {
        window.localStorage.setItem(config.userTokenName, response.data.signinUser.token);
        this.props.history.push('/');
      }).catch(e => {
        console.error(e); // eslint-disable-line
        this.props.history.push('/');
      });
    }).catch(e => {
      console.error(e); // eslint-disable-line
      this.props.history.push('/');
    });
  }

  render() {

    return (
      <Layout>
        <div className='w-100 mw6 center bg-white-90 hover-bg-white black-80 hover-black br3 pa3 pa4-ns mv5 ba b--black-10' >
          <h1>Sign Up</h1>
          { this.state.apolloError && <h3 className='tc pv2'>{this.state.apolloError}</h3> }
          <Form onSubmit={this._onSubmit} />
        </div>
      </Layout>
    );
  }
}

Signup.propTypes = {
  data: PropTypes.shape({
    user: PropTypes.object,
    loading: PropTypes.bool,
  }),
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  createUser: PropTypes.func,
  signinUser: PropTypes.func,
};

Signup.defaultProps = {
  data: {},
}

export default Signup;
