import React from 'react';
import classnames from 'classnames';

import logoColor from '../../images/logo-color.svg';
import logoMono from '../../images/logo-mono.svg';

const classes = (props) => {
  return classnames({
    'NavLogo': true,
    'NavLogo--mono': props.mono,
    'NavLogo--color': !props.mono,
  });
};

const Logo = (props) => {
  return <a href="https://subvisual.co" className={classes(props)}>
    <div dangerouslySetInnerHTML={{__html: logoColor}} />
    <div dangerouslySetInnerHTML={{__html: logoMono}} />
  </a>;
};

export default Logo;
