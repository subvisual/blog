import React from 'react';
import Typekit from 'react-typekit';

import Separator from '../components/separator';
import Sitemap from '../components/sitemap';
import Footer from '../components/footer';

import '../css/markdown-styles.css';
import '../css/legacy.scss';
import '../css/app.scss';

const Template = ({ children }) => (
  <div>
    {children}
    <div className="Separator Separator--subvisual" />
    <Sitemap />
    <Footer />
    <Typekit kitId="wbx6iwp" />
  </div>
);

Template.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Template;
