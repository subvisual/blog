import React from "react"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div styleName="blue">
      <div styleName="content">
        <p>Handcrafted by Subvisual © {year}</p>
      </div>
    </div>
  )
}

export default Footer
