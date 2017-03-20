import React from 'react';

import logoColor from '../images/logo-color.svg';

export default class Sitemap extends React.Component {
  render() {
    return <div className="HorizontalGrid HorizontalGrid--limited HorizontalGrid--withGutters u-largeMargin u-exceptSmall">
      <div className="HorizontalGrid-cell">
        <div className="SitemapTopic">
          <h1 className="SitemapTopic-heading">Work</h1>
          <div className="u-xSmallMargin"></div>
          <ul className="SitemapTopic-links">
            <li><a href="/work/product-development" className="SitemapTopic-link">Product Development</a></li>
            <li><a href="/work/consulting" className="SitemapTopic-link">Consulting</a></li>
            <li><a href="/work/training" className="SitemapTopic-link">Trainig</a></li>
            <li><a href="/work/product-development/design-sprint" className="SitemapTopic-link">Design Spring</a></li>
            <li><a href="/work/product-development/mdp" className="SitemapTopic-link">MDP</a></li>
          </ul>
        </div>
      </div>
      <div className="HorizontalGrid-cell">
        <div className="SitemapTopic">
          <h1 className="SitemapTopic-heading">Company</h1>
          <div className="u-xSmallMargin"></div>
          <ul className="SitemapTopic-links">
            <li><a href="/company#history" className="SitemapTopic-link">History</a></li>
            <li><a href="/company#values" className="SitemapTopic-link">Values</a></li>
            <li><a href="/company#team" className="SitemapTopic-link">Team</a></li>
            <li><a href="/company#join-us" className="SitemapTopic-link">Join Us</a></li>
          </ul>
        </div>
      </div>
      <div className="HorizontalGrid-cell">
        <div className="SitemapTopic">
          <h1 className="SitemapTopic-heading">Community</h1>
          <div className="u-xSmallMargin"></div>
          <ul className="SitemapTopic-links">
            <li><a href="/community#creators-school" className="SitemapTopic-link">Creators School</a></li>
            <li><a href="/community#rubyconfpt" className="SitemapTopic-link">RubyConf Portugal</a></li>
            <li><a href="/community#bragarb" className="SitemapTopic-link">BragaRB</a></li>
            <li><a href="/community#bragajs" className="SitemapTopic-link">BragaJS</a></li>
          </ul>
        </div>
      </div>
      <div className="HorizontalGrid-cell">
        <div className="SitemapTopic">
          <h1 className="SitemapTopic-heading">Follow Us</h1>
          <div className="u-xSmallMargin"></div>
          <ul className="SitemapTopic-links">
            <li><a href="/blog" className="SitemapTopic-link">Blog</a></li>
            <li><a href="https://twitter.com/subvisual" target="_blank" className="SitemapTopic-link">Twitter</a></li>
            <li><a href="/https://www.facebook.com/subvisual.co" target="_blank" className="SitemapTopic-link">Facebook</a></li>
            <li><a href="https://github.com/subvisual" target="_blank" className="SitemapTopic-link">Github</a></li>
            <li><a href="https://dribbble.com/subvisual" target="_blank" className="SitemapTopic-link">Dribbble</a></li>
          </ul>
        </div>
      </div>
    </div>;
  }
}
