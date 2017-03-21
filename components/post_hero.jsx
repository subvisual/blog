import React from 'react';
import moment from 'moment';
import classnames from 'classnames';

import '../css/components/post_hero.scss';

import Authors from '../data/authors.yaml';

const formattedDate = (date) => (
  moment(date).format('MMM Do, YYYY')
);

const coverStyle = (props) => {
  if (!props.cover) {
    return null;
  }

  return {
    backgroundImage: `url(${props.cover})`
  };
}

const mainClasses = (props) => {
  return classnames({
    "PostHero": true,
    "PostHero--withCover": props.cover,
  });
}

const postHeadingClasses = (props) => {
  return classnames({
    "PostHeading": true,
    "PostHeading--large": true,
    "PostHeading--light": props.cover
  });
}

const postInfoClasses = (props) => {
  return classnames({
    "PostInfo": true,
    "PostInfo--light": props.cover
  });
}

const author = (props) => (
  _.find(Authors, { slug: props.author })
);

const PostHero = (props) => {
  return <div className={mainClasses(props)}>
    <div className="u-navPlaceholder" />

    <div className="PostHero-cover" style={coverStyle(props)}></div>
    <img className="PostHero-hiddenImage" src={props.cover}/>
    <div className="PostHero-overlay"></div>

    <div className="PostHero-content">
      <div className="PostWidthConstrainer PostWidthConstrainer--title">
        <h1 className={postHeadingClasses(props)}>{props.title}</h1>

        <div className={postInfoClasses(props)}>
          <div className="u-smallThenDefaultMargin"></div>
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
  </div>;
};

export default PostHero;
