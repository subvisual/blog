import React, { PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';

import Hero from './hero';
import Picture from './author/picture';
import SocialLinks from './social_links';
import Authors from '../data/authors.yaml';

import GoBackIcon from '../images/icon-go-back.svg';

const AuthorHero = ({ author }) => {
  const authorData = Authors[author];

  return <Hero author>
    <div className="u-navPlaceholder" />
    <div className="u-defaultThenLargeMargin" />
    <div className="PostWidthConstrainer">
      <h1 className="HeroHeading HeroHeading--withPicture HeroHeading--withLinks">
        <Picture className="HeroHeading-picture" slug={author} />
        {authorData.name}
        <div className="HeroHeading-links">
          <SocialLinks {...authorData} />
        </div>
      </h1>
      <div className="u-xSmallMargin" />
      <p className="HeroText">{authorData.bio}</p>
      <div className="u-smallPadding" />
      <a href={prefixLink('/')} className="BackToIndex">
        <div className="BackToIndex-icon" dangerouslySetInnerHTML={{ __html: GoBackIcon }} />
        Go back
      </a>
    </div>
    <div className="u-smallThenDefaultPadding" />
  </Hero>;
};

AuthorHero.propTypes = {
  author: PropTypes.string.isRequired,
};

AuthorHero.defaultProps = {
};

export default AuthorHero;
