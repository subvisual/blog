import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { prefixLink } from 'gatsby-helpers';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import Authors from '../data/authors.yaml';
import Picture from './author/picture';
import FormattedDate from './formatted_date';

const link = (slug, { name }) => (
  <a
    href={prefixLink(`/authors/${slug}/`)}
    className="SmallAuthor-link"
  >
    {name}
  </a>
);

link.propTypes = {
  twitter: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
};

const SmallAuthor = ({ slug, date }) => (
  <div className="SmallAuthor">
    <Picture className="SmallAuthor-image" slug={slug} />
    <div className="SmallAuthor-text">
      Written by {link(slug, Authors[slug])} on <FormattedDate date={date} />
    </div>
  </div>
);

SmallAuthor.propTypes = {
  slug: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
};

export default SmallAuthor;
