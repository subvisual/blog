import React from 'react';

import Authors from '../data/authors.yaml';
import Picture from './author/picture';
import roberto from '../images/authors/roberto-machado.png';

import '../css/components/author.scss';

const data = slug => Authors[slug];

const Author = ({ slug }) => {
  const data = Authors[slug];

  if (!data)
    console.error(slug);

  return <div className="Author Author--responsive">
    <div className="Author-imageWrapper">
      <Picture className="Author-image" slug={slug} />
    </div>
    <div className="Author-bioWrapper">
      <h2 className="Author-heading">
        About <a
          href={`https://twitter.com/${data.twitter}`}
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
  </div>
};

export default Author;
