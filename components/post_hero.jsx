import React from 'react';
import moment from 'moment';
import classnames from 'classnames';
import _ from 'lodash';

import Authors from '../data/authors.yaml';

const formattedDate = date => (
  moment(date).format('MMM Do, YYYY')
);

const coverStyle = (props) => {
  if (!props.cover) {
    return null;
  }

  return {
    backgroundImage: `url(${props.cover})`,
  };
};

const mainClasses = props => (
  classnames({
    PostHero: true,
    'PostHero--withCover': props.cover,
  })
);

const postHeadingClasses = props => (
  classnames({
    PostHeading: true,
    'PostHeading--large': true,
    'PostHeading--light': props.cover,
  })
);

const postInfoClasses = props => (
  classnames({
    PostInfo: true,
    'PostInfo--light': props.cover,
  })
);

const author = ({ author }) => (
  Authors[author]
);

const PostHero = props => (
  <div className={mainClasses(props)}>
    <div className="u-navPlaceholder" />

    <div className="PostHero-cover" style={coverStyle(props)} />
    <img className="PostHero-hiddenImage" src={props.cover} alt="Post hero cover" />
    <div className="PostHero-overlay" />

    <div className="PostHero-content">
      <div className="PostWidthConstrainer PostWidthConstrainer--title">
        <h1 className={postHeadingClasses(props)}>{props.title}</h1>

        <div className={postInfoClasses(props)}>
          <div className="u-smallThenDefaultMargin" />
          <div className="PostInfo-author">
            by&nbsp;
            <span className="PostInfo-authorName">{author(props).name}</span>
          </div>
          <div className="PostInfo-date">
            on&nbsp;
            {formattedDate(props.date)}
          </div>
        </div>
      </div>
    </div>
  </div>
);

PostHero.propTypes = {
  title: React.PropTypes.string.isRequired,
  cover: React.PropTypes.string,
  date: React.PropTypes.string,
};

PostHero.defaultProps = {
  cover: '',
  date: '',
};

export default PostHero;
