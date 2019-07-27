module.exports = {
  siteMetadata: {
    title: `Subvisual Blog`,
    description: ``,
    author: `@subvisual`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `subvisual-blog`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#e2e2e2`,
        theme_color: `#00a5d4`,
        display: `minimal-ui`,
        icon: `src/images/subvisual-symbol-blue.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
