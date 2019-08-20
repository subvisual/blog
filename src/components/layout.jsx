import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Footer from "./layout/footer"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/bcx8qfd.css" />
    </Helmet>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
