import React from "react"

import Text from "../text"
import styles from "./footer.module.css"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className={styles.root}>
      <p>
        <Text small>Handcrafted by Subvisual © {year}</Text>
      </p>
    </div>
  )
}

export default Footer
