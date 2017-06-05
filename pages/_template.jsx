import React from 'react';
import Typekit from 'react-typekit';

import Sitemap from '../components/sitemap';
import Footer from '../components/footer';
import Meta from '../components/meta';

import Logo from '../images/logo.png';

import '../css/markdown-styles.css';
import '../css/legacy.scss';
import '../css/app.scss';

const Template = ({ children, route }) => (
  <div>
    <Meta base route={route} image={Logo} />
    {children}
    <div className="Separator Separator--subvisual" />
    <Sitemap />
    <Footer />
    <Typekit kitId="wbx6iwp" />
  </div>
);

Template.propTypes = {
  children: React.PropTypes.node.isRequired,
  route: React.PropTypes.shape.isRequired,
};

export default Template;
