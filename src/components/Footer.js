import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
    return (
      <div className={classNames('w-100 overflow-auto pv2 pv4-l bg-black-90 near-white', this.props.className)}>
        <div className={classNames('w-100 mw8 center overflow-auto ph2 ph0-l')}>
          <div className='w-100 w-50-ns dib tl'>
            <p>Copyright &copy; {(new Date()).getFullYear()} John Kahn</p>
          </div>
          <div className='w-100 w-50-ns dib tr-ns'>
            <p>Coded by <a href='http://jkahn.me' className='link underline near-white dim' target='_blank' >John Kahn</a></p>
          </div>
          <div className='w-100 dib'>
            Logo icon made by <a href='http://www.freepik.com' className='near-white no-underline underline-hover' target='_blank' title='Freepik'>Freepik</a> from <a href='http://www.flaticon.com' className='near-white no-underline underline-hover' target='_blank' title='Flaticon'>www.flaticon.com</a> is licensed by <a href='http://creativecommons.org/licenses/by/3.0/' className='near-white no-underline underline-hover' target='_blank' title='Creative Commons BY 3.0'>CC 3.0 BY</a>
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

Footer.defaultProps = {
  className: '',
  children: [],
}

export default Footer;
