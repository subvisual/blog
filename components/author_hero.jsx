import React, { PropTypes } from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { prefixLink } from 'gatsby-helpers';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import Hero from './hero';
import Authors from '../data/authors.yaml';

import GoBackIcon from '../images/icon-go-back.svg';

const AuthorHero = ({ author }) => {
  const authorData = Authors[author];

  return <Hero author>
    <div className="u-navPlaceholder" />
    <div className="u-defaultThenLargeMargin" />
    <div className="PostWidthConstrainer">
      <h1 className="HeroHeading">{authorData.name}</h1>
      <div className="u-smallPadding" />
      <a href={prefixLink("/")} className="BackToIndex">
        <div className="BackToIndex-icon" dangerouslySetInnerHTML={{ __html: GoBackIcon }} />
        Go to Index
      </a>
    </div>
    <div className="u-smallThenDefaultPadding" />
  </Hero>
};

AuthorHero.propTypes = {
  author: PropTypes.string.isRequired,
};

AuthorHero.defaultProps = {
};

export default AuthorHero;
