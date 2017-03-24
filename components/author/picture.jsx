import React from 'react';

import Authors from '../../data/authors.yaml';

import bruno from '../../images/authors/bruno-azevedo.png';
import francisco from '../../images/authors/francisco-baila.png';
import gabriel from '../../images/authors/gabriel-poca.png';
import joao from '../../images/authors/joao-ferreira.png';
import justo from '../../images/authors/joao-justo.png';
import laura from '../../images/authors/laura-esteves.png';
import zamith from '../../images/authors/luis-zamith.png';
import naps from '../../images/authors/miguel-palhas.png';
import pedro from '../../images/authors/pedro-costa.png';
import roberto from '../../images/authors/roberto-machado.png';
import ronaldo from '../../images/authors/ronaldo-sousa.png';

const pictures = {
  'bruno-azevedo': bruno,
  'francisco-baila': francisco,
  'gabriel-poca': gabriel,
  'joao-ferreira': joao,
  'joao-justo': justo,
  'laura-esteves': laura,
  'luis-zamith': zamith,
  'miguel-palhas': naps,
  'pedro-costa': pedro,
  'roberto-machado': roberto,
  'ronaldo-sousa': ronaldo,
};

const authorPicture = slug => {
  return {
  src: pictures[slug],
  alt: Authors[slug].name,
  }
};

const Picture = ({ slug, className }) => (
  <img
    className={className}
    {...authorPicture(slug)}
  />
);

Picture.propTypes = {
  slug: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
};

Picture.defaultProps = {
  className: "",
};

export default Picture;
