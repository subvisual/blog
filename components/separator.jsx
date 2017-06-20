import React from 'react';

import separator from '../images/subvisual-separator.svg';

const Separator = () => (
  <div className="Separator Separator--subvisual" dangerouslySetInnerHTML={{ __html: separator }} />
);

export default Separator;
