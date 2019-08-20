import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./text.module.css"

function Text({ children, small }) {
  const className = classNames(styles.root, {
    [styles.small]: small,
  })

  return <span className={className}>{children}</span>
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
}

Text.defaultProps = {
  small: false,
}

export default Text
