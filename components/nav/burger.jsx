import React from 'react';
import classnames from 'classnames';

const classes = (props) => {
  return classnames({
    'Burger': true,
    'Burger--light': props.light,
    [props.classes]: true,
    'is-open': props.open,
  });
}

const Burger = (props) => {
  return <div className={classes(props)} onClick={props.onClick}>
    <div className="Burger-line"></div>
    <div className="Burger-line"></div>
    <div className="Burger-line"></div>
  </div>
}

export default Burger;
