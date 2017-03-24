import React from 'react';

import roberto from '../images/authors/roberto-machado.jpg';

import '../css/components/author.scss';

const Author = props => (
  <div className="Author Author--responsive">
    <div className="Author-image">
      <img className='Author-picture' src={roberto} />
    </div>
  </div>
);

export default Author;
