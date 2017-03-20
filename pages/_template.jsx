import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import '../css/markdown-styles'
import '../css/legacy';

import separator from '../images/subvisual-separator.svg';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  },
})
