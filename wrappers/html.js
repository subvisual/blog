import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import Meta from '../components/meta';

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const page = this.props.route.page.data
    return (
      <div>
        <Helmet>
          <Meta base route={this.props.route} />
        </Helmet>
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </div>
    )
  },
})
