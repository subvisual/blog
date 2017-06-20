import React, { PropTypes } from 'react';

import twitterIcon from '../images/icons/twitter.svg';
import githubIcon from '../images/icons/github.svg';
import dribbbleIcon from '../images/icons/dribbble.svg';

const Icons = {
  twitter: twitterIcon,
  github: githubIcon,
  dribbble: dribbbleIcon,
};

export default class SocialLinks extends React.Component {
  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    twitter: PropTypes.string,
    github: PropTypes.string,
    dribbble: PropTypes.string,
    /* eslint-enable react/no-unused-prop-types */
  }

  static defaultProps = {
    twitter: null,
    github: null,
    dribbble: null,
  }

  renderLink(name) {
    if (!this.props[name]) {
      return null;
    }

    return <a
      key={name}
      className={`SocialLinks SocialLinks-${name}`}
      href={`https://${name}.com/${this.props[name]}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="SocialLinks-icon" dangerouslySetInnerHTML={{ __html: Icons[name] }} />
    </a>;
  }

  renderLinks() {
    return [
      this.renderLink('twitter'),
      this.renderLink('github'),
      this.renderLink('dribbble'),
    ];
  }

  render() {
    return <div className="SocialLinks">
      {this.renderLinks()}
    </div>;
  }
}
