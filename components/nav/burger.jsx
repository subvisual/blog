import React from 'react';
import classnames from 'classnames';

const classes = props => (
  classnames({
    Burger: true,
    'Burger--light': props.light,
    [props.classes]: true,
    'is-open': props.open,
  })
);

const Burger = props => (
  <button className={classes(props)} onClick={props.onClick}>
    <div className="Burger-line" />
    <div className="Burger-line" />
    <div className="Burger-line" />
  </button>
);

Burger.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};

export default Burger;
