import React from "react"
import PropTypes from "prop-types"

import Footer from "./Footer/"

const Layout = ({ children }) => (
  <>
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
