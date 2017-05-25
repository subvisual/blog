import React from 'react';

import Hero from './hero';
import TagList from './tag_list';

const IndexHero = () => (
  <Hero>
    <div className="u-navPlaceholder" />
    <div className="u-defaultThenLargeMargin" />
    <div className="PostWidthConstrainer">
      <h1 className="HeroHeading HeroHeading--dark">Search by tag</h1>
      <div className="u-smallPadding" />
      <TagList tags={['general', 'development', 'design', 'community', 'ruby', 'elixir']} />
    </div>
    <div className="u-smallThenDefaultPadding" />
  </Hero>
);

IndexHero.propTypes = {
};

IndexHero.defaultProps = {
};

export default IndexHero;
