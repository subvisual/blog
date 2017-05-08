import React from 'react';
import { prefixLink } from 'gatsby-helpers';

import Authors from '../data/authors.yaml';
import Picture from './author/picture';

const Author = ({ slug }) => {
  const data = Authors[slug];

  return <div className="Author Author--responsive">
    <div className="Author-imageWrapper">
      <Picture className="Author-image" slug={slug} />
    </div>
    <div className="Author-bioWrapper">
      <h2 className="Author-heading">
        About <a
          href={prefixLink(`/authors/${slug}/`)}
          target="_blank"
          rel="noreferrer noopener"
          className="Author-name"
        >
          {data.name}
        </a>
      </h2>

      <div className="u-xSmallMargin" />

      <div className="Author-bio">{data.bio}</div>
    </div>
  </div>;
};

Author.propTypes = {
  slug: React.PropTypes.string.isRequired,
};

export default Author;
