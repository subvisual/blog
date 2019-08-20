import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/Layout/"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Subvisual Blog - We give back by sharing</title>
      <meta
        name="description"
        content={`
      The Subvisual blog is written by people who learn from all of those
      around, and are eager to teach what they know. From team management to
      design and development, we try to give back by sharing.
      `}
      />
      <meta
        name="keywords"
        content="venture studio, digital products, project incubation, idea hub"
      />
    </Helmet>
  </Layout>
)

export default IndexPage
