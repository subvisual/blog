import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import Authors from '../data/authors.yaml';

class Meta extends React.Component {
  static propTypes = {
    baseTitle: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    route: PropTypes.shape,
    image: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.string,
    base: PropTypes.bool,
  }

  static defaultProps = {
    baseTitle: false,
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
      <meta property="fb:admins" content="100000633932565,1448175923" />
      <meta property="og:site_name" content="Subvisual Website" />
      <meta property="og:type" content="blog" />
    </Helmet>;
  }

  renderBaseTitle() {
    if (!this.props.baseTitle) {
      return null;
    }

    const title = config.siteTitle;

    return <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta itemProp="name" content={title} />
    </Helmet>;
  }

  renderTitle() {
    if (!this.props.title) {
      return null;
    }

    const fullTitle = `${this.props.title} | ${config.siteTitle}`;

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
      {this.renderBaseTitle()}
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
