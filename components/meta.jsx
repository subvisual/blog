import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { config } from 'config';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import Authors from '../data/authors.yaml';

class Meta extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    route: PropTypes.shape,
    image: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.string,
    base: PropTypes.bool,
  }

  static defaultProps = {
    title: null,
    description: null,
    route: null,
    image: null,
    twitter: null,
    author: null,
    type: null,
    base: false,
  }

  renderBase() {
    if (!this.props.base) {
      return null;
    }

    return <Helmet>
      <meta name="author" content="Subvisual" />
      <meta property="fb:app_id" content="169112516473978" />
      <meta property="fb:admins" content="100000633932565,1448175923" />
      <meta property="og:site_name" content="Subvisual Website" />
      <meta property="og:type" content="blog" />
    </Helmet>;
  }

  renderTitle() {
    let fullTitle = config.siteTitle;

    if (this.props.title) {
      fullTitle = `${config.siteTitle} | ${this.props.title}`;
    }

    return <Helmet>
      <title>{fullTitle}</title>
      <meta property="og:title" content={fullTitle} />
      <meta itemProp="name" content={fullTitle} />
    </Helmet>;
  }

  renderDescription() {
    if (!this.props.description) {
      return null;
    }

    return <Helmet>
      <meta name="description" content={this.props.description} />
      <meta property="twitter:description" content={this.props.description} />
      <meta itemProp="description" content={this.props.description} />

      <meta property="og:description" content={this.props.description} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="@subvisual" />
    </Helmet>;
  }

  renderUrl() {
    if (!this.props.route) {
      return null;
    }

    return <Helmet>
      <meta property="og:url" content={`${config.baseUrl}${this.props.route.path}`} />
    </Helmet>;
  }

  renderAuthor() {
    if (!this.props.author) {
      return null;
    }

    const authorData = Authors[this.props.author];

    return <Helmet>
      <meta name="author" content={authorData.name} />
      <meta property="twitter:creator" content={`@${authorData.twitter}`} />
    </Helmet>;
  }

  renderImage() {
    if (!this.props.image) {
      return null;
    }

    return <Helmet>
      <meta property="og:image" content={this.props.image} />
      <meta property="twitter:image" content={this.props.image} />
      <meta itemProp="image" content={this.props.image} />
    </Helmet>;
  }

  renderType() {
    if (!this.props.type) {
      return null;
    }

    return <Helmet>
      <meta property="og:type" content={this.props.type} />
    </Helmet>;
  }

  render() {
    return <div>
      {this.renderBase()}
      {this.renderTitle()}
      {this.renderUrl()}
      {this.renderImage()}
      {this.renderDescription()}
      {this.renderAuthor()}
      {this.renderType()}
    </div>;
  }
}

export default Meta;
