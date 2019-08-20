import React from "react"

import Text from "../text"
import styles from "./footer.module.css"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <p>
          <Text small>Handcrafted by Subvisual © {year}</Text>
        </p>
      </div>
    </div>
  )
}

export default Footer
