import React from 'react';
import classnames from 'classnames';

import logoColor from '../../images/logo-color.svg';
import logoMono from '../../images/logo-mono.svg';

const classes = props => (
  classnames({
    NavLogo: true,
    'NavLogo--mono': props.mono,
    'NavLogo--color': !props.mono,
  })
);

const Logo = props => (
  /* eslint-disable react/no-danger */
  <a href="https://subvisual.co" className={classes(props)}>
    <div dangerouslySetInnerHTML={{ __html: logoColor }} />
    <div dangerouslySetInnerHTML={{ __html: logoMono }} />
  </a>
  /* eslint-enable react/no-danger */
);

export default Logo;
