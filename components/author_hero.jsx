import React, { PropTypes } from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { prefixLink } from 'gatsby-helpers';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import Hero from './hero';
import Picture from './author/picture';
import Authors from '../data/authors.yaml';

import GoBackIcon from '../images/icon-go-back.svg';

const AuthorHero = ({ author }) => {
  const authorData = Authors[author];

  /* eslint-disable react/no-danger */
  return <Hero author>
    <div className="u-navPlaceholder" />
    <div className="u-defaultThenLargeMargin" />
    <div className="PostWidthConstrainer">
      <h1 className="HeroHeading HeroHeading--withPicture">
        <Picture className="HeroHeading-picture" slug={author} />
        {authorData.name}
      </h1>
      <div className="u-smallPadding" />
      <a href={prefixLink('/')} className="BackToIndex">
        <div className="BackToIndex-icon" dangerouslySetInnerHTML={{ __html: GoBackIcon }} />
        Go back
      </a>
    </div>
    <div className="u-smallThenDefaultPadding" />
  </Hero>;
  /* eslint-enable react/no-danger */
};

AuthorHero.propTypes = {
  author: PropTypes.string.isRequired,
};

AuthorHero.defaultProps = {
};

export default AuthorHero;
