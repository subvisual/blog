import React from 'react'
import Helmet from 'react-helmet'
import Typekit from 'react-typekit';

import { prefixLink } from 'gatsby-helpers'
import Sitemap from 'components/sitemap';
import Footer from 'components/footer';

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      body: React.PropTypes.string,
    }
  },
  render () {
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
        </head>
        <body className="Theme">
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
          <div className="Separator Separator--subvisual"></div>
          <Sitemap />
          <Footer />
          <Typekit kitId="wbx6iwp" />
        </body>
      </html>
    )
  },
})
