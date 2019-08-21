import React from "react"

import Logo from "../logo"
import Text from "../text"
import styles from "./footer.module.css"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo color="white" />
        </div>
        <p>
          <Text small>Handcrafted by Subvisual © {year}</Text>
        </p>
      </div>
    </div>
  )
}

export default Footer
