import React from 'react';

import Authors from '../data/authors.yaml';
import Picture from './author/picture';
import FormattedDate from './formatted_date';

import roberto from '../images/authors/roberto-machado.png';

const data = slug => Authors[slug];

const link = ({ twitter, name }) => (
  <a
    href={`https://twitter.com/${twitter}`}
    target="_blank"
    rel="noreferrer noopener"
    className="SmallAuthor-link"
  >
    {name}
  </a>
)

const SmallAuthor = ({ slug, date }) => {
  const data = Authors[slug];

  if (!data)
    console.error(slug);

  return <div className="SmallAuthor">
    <Picture className="SmallAuthor-image" slug={slug} />
    <div className="SmallAuthor-text">
      Written by {link(data)} on <FormattedDate date={date} />
    </div>
  </div>
};

export default SmallAuthor;
