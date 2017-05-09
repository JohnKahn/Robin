import React from 'react';

import classNames from 'classnames';

const Section = (props) => (
  <div className={classNames('w-100 overflow-auto pv2 pv4-l', props.className)}>
    <div className={classNames('w-100 mw8 center overflow-auto ph2 ph0-l')}>
      {props.headline && (
        <h1 className='f1 f-subheadline-m f-headline-l mt2 mt3-l'>{props.headline}</h1>
      )}
      {props.children}
    </div>
  </div>
);

export default Section;
