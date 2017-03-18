import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Nav from '../components/nav';
import '../css/markdown-styles'
import '../css/legacy';

import separator from '../images/subvisual-separator.svg';

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Nav />
        {this.props.children}
        <div className="Separator Separator--subvisual"></div>
      </div>
    )
  },
})
