import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import '../css/markdown-styles'
import '../css/legacy';

class Template extends React.Component {
  render () {
    return <div>
      {this.props.children}
    </div>;
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
}

export default Template;
