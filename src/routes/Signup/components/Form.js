import React from 'react';
import reformed from 'react-reformed';
import compose from 'react-reformed/lib/compose'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import validate, { isRequired } from '../../../lib/FormValidation';

class CreateUserForm extends React.Component {
  state = {
    hasSubmitted: false
  }

  _onSubmit = (e) => {
    e.preventDefault();
    this.setState({ hasSubmitted: true });
    if (this.props.isValid) {
      this.props.onSubmit(this.props.model);
    }
  }

  _onChangeInput = (e) => {
    this.props.setProperty(e.target.name, e.target.value);
  }

  render() {
    const { bindInput } = this.props;

    const { hasSubmitted } = this.state;
    const { errors } = this.props;
    const errorMessages = hasSubmitted && Object.values(errors).map((e, i) => (
      <li key={`validationError${i}`}>{e}</li>
    ));

    return (
      <form onSubmit={this._onSubmit} className='black-80 width-100'>
        <div className='dib w-50 mt3 pr2'>
          <label className={classNames('db fw4 lh-copy f6', { 'red': hasSubmitted && errors['name'] })} htmlFor='name'>Name (optional)</label>
          <input tabIndex={1} type='text' id='name' className={classNames('pa2 input-reset ba bg-transparent w-100', { 'b--red': hasSubmitted && errors['name'] })} {...bindInput('name')} />
        </div>
        <div className='dib w-50 mt3 pl2'>
          <label className={classNames('db fw4 lh-copy f6', { 'red': hasSubmitted && errors['username'] })} htmlFor='username'>Username*</label>
          <input tabIndex={2} type='text' id='username' className={classNames('pa2 input-reset ba bg-transparent w-100', { 'b--red': hasSubmitted && errors['username'] })} {...bindInput('username')} />
        </div>
        <div className='dib w-100 mt3'>
          <label className={classNames('db fw4 lh-copy f6', { 'red': hasSubmitted && errors['email'] })} htmlFor='email'>Email*</label>
          <input tabIndex={3} type='email' id='email' className={classNames('pa2 input-reset ba bg-transparent w-100', { 'b--red': hasSubmitted && errors['email'] })} {...bindInput('email')} />
        </div>
        <div className='dib w-100 mt3'>
          <label className={classNames('db fw4 lh-copy f6', { 'red': hasSubmitted && errors['password'] })} htmlFor='password'>Password*</label>
          <input tabIndex={4} type='password' id='password' className={classNames('b pa2 input-reset ba bg-transparent w-100', { 'b--red': hasSubmitted && errors['password'] })} {...bindInput('password')} />
        </div>
        <div className='mt3'><input tabIndex={5} className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6' type='submit' value='Sign Up' /></div>
        <ul className='list pl0 red'>
          { errorMessages }
        </ul>
      </form>
    );
  }
}

CreateUserForm.propTypes = {
  setProperty: PropTypes.func,
  isValid: PropTypes.bool,
  bindInput: PropTypes.func,
  onSubmit: PropTypes.func,
  model: PropTypes.object,
  errors: PropTypes.object
};

export default compose(
  reformed(),
  validate([
    isRequired('username', 'Username'),
    isRequired('email', 'Email'),
    isRequired('password', 'Password'),
  ]),
)(CreateUserForm);
