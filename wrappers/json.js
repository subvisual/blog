import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import Meta from '../components/meta';
import Tag from './json/tag';
import Author from './json/author';

const Json = props => {
  const { dirname, name } = props.route.page.file;

  if (dirname.includes("tags")) {
    return <Tag {...props} tag={name} />;
  } else if (dirname.includes("authors")) {
    return <Author {...props} author={name} />;
  } else {
    const data = props.route.page.data;

    if (dirname) {
      return <div>
        <Meta base route={this.props.route} />
        <h1>{data.title}</h1>
        <p>Raw view of json file</p>
        <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 4) }} />
      </div>
    } else {
      return null;
    }
  }
};

Json.propTypes = {
  route: React.PropTypes.object,
};

export default Json;
