import React from 'react';
import Helmet from 'react-helmet';
import { config } from '../config.toml';

import Navigation from '../components/nav/all';

const Index = () => (
  <div>
    <Helmet
      title={config.siteTitle}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Navigation />
    <div className="u-navPlaceholder" />
  </div>
);

export default Index;
