import React from "react"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        path
        title
      }
    }
  }
`

export default function PostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <article>
      <header>
        <h1>{frontmatter.title}</h1>
        <small>{frontmatter.date}</small>
      </header>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
