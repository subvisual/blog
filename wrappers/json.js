import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import Tag from './json/tag';
import Author from './json/author';

const Json = props => {
  const { dirname } = props.route.page.file;

  if (dirname.includes("tags")) {
    return <Tag {...props} />;
  } else if (dirname.includes("authors")) {
    return <Author {...props} />;
  } else {
    const data = props.route.page.data;

    if (dirname)
    return <div>
      <Helmet
        title={`${config.siteTitle} | ${data.title}`} 
      />
      <h1>{data.title}</h1>
      <p>Raw view of json file</p>
      <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 4) }} />
    </div>
  }
};

Json.propTypes = {
  route: React.PropTypes.object,
};

export default Json;
