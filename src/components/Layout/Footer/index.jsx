import React from "react"

import styles from "./index.module.css"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className={styles.root}>
      <p>Handcrafted by Subvisual © {year}</p>
    </div>
  )
}

export default Footer
