import React from 'react';
import classnames from 'classnames';

import Authors from '../data/authors.yaml';
import FormattedDate from './formatted_date';
import Meta from './meta';

class PostHero extends React.Component {
  coverStyle() {
    if (!this.props.cover) {
      return null;
    }

    return {
      backgroundImage: `url(${this.props.cover})`,
    };
  }

  mainClasses() {
    return classnames({
      PostHero: true,
      'PostHero--withCover': this.props.cover,
    });
  }

  postHeadingClasses() {
    return classnames({
      PostHeading: true,
      'PostHeading--large': true,
      'PostHeading--light': this.props.cover,
    });
  }


  postInfoClasses() {
    return classnames({
      PostInfo: true,
      'PostInfo--light': this.props.cover,
    });
  }

  authorData() {
    return Authors[this.props.author];
  }

  renderMeta() {
    return <Meta image={this.props.cover} />;
  }


  render() {
    return <div className={this.mainClasses()}>
      {this.renderMeta()}
      <div className="u-navPlaceholder" />

      <div className="PostHero-cover" style={this.coverStyle()} />
      <img className="PostHero-hiddenImage" src={this.props.cover} alt="Post hero cover" />
      <div className="PostHero-overlay" />

      <div className="PostHero-content">
        <div className="PostWidthConstrainer PostWidthConstrainer--title">
          <h1 className={this.postHeadingClasses()}>{this.props.title}</h1>

          <div className={this.postInfoClasses()}>
            <div className="u-smallThenDefaultMargin" />
            <div className="PostInfo-author">
              by&nbsp;
              <span className="PostInfo-authorName">{this.authorData().name}</span>
            </div>
            <div className="PostInfo-date">
              on&nbsp;
              <FormattedDate date={this.props.date} />
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

PostHero.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  cover: React.PropTypes.string,
  date: React.PropTypes.string,
};

PostHero.defaultProps = {
  cover: '',
  date: '',
};

export default PostHero;
