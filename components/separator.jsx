import React from 'react';

import separator from '../images/subvisual-separator.svg';

const Separator = () => (
  /* eslint-disable react/no-danger */
  <div className="Separator Separator--subvisual" dangerouslySetInnerHTML={{ __html: separator }} />
  /* eslint-enable react/no-danger */
);

export default Separator;
