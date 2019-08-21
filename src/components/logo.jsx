import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import uuid from "uuid/v4"

import colors from "./colors.module.css"
import styles from "./logo.module.css"

function Logo({ color }) {
  const colorCode = colors[color]
  const radialUUID = uuid()

  return (
    <Link to="/" className={styles.root}>
      <svg viewBox="0 0 245 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse
          cx="133.244"
          cy="5.776"
          rx="5.375"
          ry="5.147"
          fill={`url(#${radialUUID})`}
        />
        <path
          d="M25.6 13.616h.56L25.6 3.76c-3.08-1.68-7.448-2.52-10.864-2.52C7.064 1.24.904 5.16.904 12.552c0 12.208 19.208 11.592 19.208 21.728 0 4.816-3.36 6.72-6.552 6.72-6.216 0-10.192-5.376-12.04-12.656H.96l.56 10.416c3.08 1.68 7.952 2.8 11.984 2.8 7.504 0 14.392-3.808 14.392-12.432 0-12.712-19.208-12.544-19.208-22.12 0-3.696 2.856-5.208 6.104-5.208 5.264 0 8.96 5.768 10.808 11.816zM50.26 16.92v18.2c-1.12.952-2.744 2.24-5.32 2.24-2.017 0-3.024-1.344-3.024-3.528V12.44h-1.008l-11.649 1.344v.56c2.968.28 3.304.504 3.304 2.576v16.24c0 6.16 3.529 8.4 7.672 8.4 4.089 0 7.449-2.52 10.025-5.88h.28l.224 5.88h.56l11.592-1.344v-.56c-2.968-.28-3.304-.504-3.304-2.576V12.44h-1.009l-12.767 1.344v.56c4.087.28 4.424.504 4.424 2.576zM75.534 16.584h-.28L75.534.12h-.56L62.878 1.464v.56c2.968.28 3.304.504 3.304 2.576v36.68h.56l4.536-3.08c2.856 2.632 6.328 3.36 9.184 3.36 7.84 0 14-5.544 14-14.56 0-8.4-4.2-14.56-11.256-14.56-3.36 0-5.88 1.624-7.672 4.144zm3.36-.784c3.192 0 5.712 3.472 5.712 11.648 0 7.112-1.344 13.328-4.928 13.328-1.512 0-4.144-.616-4.144-6.608V17.144c1.064-.896 2.184-1.344 3.36-1.344zM96.75 17.2l10.361 24.08h4.872l8.792-23.744c.84-2.184 1.456-3.472 4.144-3.976V13h-10.976v.56c6.048.336 6.832 1.96 6.048 4.144L113.943 34h-.112l-6.44-16.296c-.784-1.96-.56-3.808 2.688-4.144V13H93.447v.56c1.736.224 2.52 1.792 3.304 3.64zM138.173 38.312V12.44h-.56l-12.096 1.344v.56c2.968.28 3.304.504 3.304 2.576v21.392c0 1.624-.336 1.848-3.304 2.128V41h15.96v-.56c-2.968-.28-3.304-.504-3.304-2.128zM162.291 21.4h.56l-.56-7.224c-2.24-1.064-5.824-1.736-8.456-1.736-7.504 0-10.808 3.696-10.808 8.176 0 10.192 14.728 9.856 14.728 16.464 0 2.464-1.792 3.92-4.648 3.92-4.256 0-7.952-2.912-9.8-8.96h-.56l.616 7.56c2.24 1.12 6.552 1.96 9.464 1.96 7.168 0 11.592-3.472 11.592-8.792 0-9.576-14.336-9.24-14.336-16.352 0-2.184 1.288-3.416 3.64-3.416 3.64 0 7.056 4.424 8.568 8.4zM186.267 16.92v18.2c-1.12.952-2.744 2.24-5.32 2.24-2.016 0-3.024-1.344-3.024-3.528V12.44h-1.008l-11.648 1.344v.56c2.968.28 3.304.504 3.304 2.576v16.24c0 6.16 3.528 8.4 7.672 8.4 4.088 0 7.448-2.52 10.024-5.88h.28l.224 5.88h.56l11.592-1.344v-.56c-2.968-.28-3.304-.504-3.304-2.576V12.44h-1.008l-12.768 1.344v.56c4.088.28 4.424.504 4.424 2.576zM224.422 37.472V21.008c.112-4.76-3.808-8.568-10.752-8.568-8.064 0-12.6 5.992-12.6 9.184 0 2.128 1.736 2.912 3.584 2.912 2.072 0 3.528-1.064 3.528-2.352 0-1.624-3.304-2.184-3.304-4.424 0-2.184 2.352-3.528 4.704-3.528 3.976 0 5.488 3.024 5.488 6.16v5.656c-12.152.728-14.84 5.432-14.84 8.904 0 3.696 2.408 6.608 6.664 6.608 3.36 0 6.16-1.68 8.064-4.48h.112v.672c0 2.072 1.456 3.808 4.648 3.808 3.192 0 6.048-1.456 8.344-3.304l-.056-.448c-.728.448-1.624.952-2.296.952-.84 0-1.288-.504-1.288-1.288zm-9.352-10.864v9.912c-.728.448-1.4.896-2.408.896-1.792 0-2.912-1.288-2.912-4.592 0-4.2 1.904-5.768 5.32-6.216zM241.369 38.312V.12h-.56l-12.096 1.344v.56c2.968.28 3.304.504 3.304 2.576v33.712c0 1.624-.336 1.848-3.304 2.128V41h15.96v-.56c-2.968-.28-3.304-.504-3.304-2.128z"
          fill={colorCode}
        />
        <defs>
          <radialGradient
            id={radialUUID}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(128.89 67.885 33.82) scale(8.54599 9.02566)"
          >
            <stop stopColor={colorCode} stopOpacity=".6" />
            <stop offset="1" stopColor={colorCode} />
          </radialGradient>
        </defs>
      </svg>
    </Link>
  )
}

Logo.propTypes = {
  color: PropTypes.string,
}

Logo.defaultProps = {
  color: "blue",
}

export default Logo