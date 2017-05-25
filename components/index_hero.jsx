import React, { PropTypes } from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { prefixLink } from 'gatsby-helpers';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import Hero from './hero';
import TagList from './tag_list';

import GoBackIcon from '../images/icon-go-back.svg';

/* eslint-disable react/no-danger */
const IndexHero = ({ }) => (
  <Hero>
    <div className="u-navPlaceholder" />
    <div className="u-defaultThenLargeMargin" />
    <div className="PostWidthConstrainer">
      <h1 className="HeroHeading HeroHeading--dark">Search by tag</h1>
      <div className="u-smallPadding" />
      <TagList tags={["general", "development", "design", "community", "ruby", "elixir"]} />
    </div>
    <div className="u-smallThenDefaultPadding" />
  </Hero>
);
/* eslint-enable react/no-danger */

IndexHero.propTypes = {
  tag: PropTypes.string.isRequired,
};

IndexHero.defaultProps = {
};

export default IndexHero;
