import React from 'react';

import Authors from '../data/authors.yaml';
import Picture from './author/picture';
import roberto from '../images/authors/roberto-machado.png';

import '../css/components/author.scss';

const Author = props => (
  <div className="Author Author--responsive">
    <div className="Author-imageWrapper">
      <Picture className="Author-image" {...props} />
    </div>
    <div className="Author-bioWrapper">
      <h2 className="Author-heading">
        About <a href="/" target="_blank" rel="noreferrer noopener" className="Author-name">Roberto Machado</a>
      </h2>

      <div className="u-xSmallMargin" />

      <div className="Author-bio">Breathes technology and deeply believes, hence the creation of Subvisual, that it is the medium for a better future. Always has 5 min to listen to you.</div>
    </div>
  </div>
);

export default Author;
