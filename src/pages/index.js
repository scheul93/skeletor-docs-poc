import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>What is Skeletor?</h1>
    <p>
    Skeletor is a highly customizable UI build tool ecosystem, created and maintained by the DEG UI team.

    On its own, Skeletor Core is just the task runner of the bunch (albeit a very flexible and powerful one, if we do say so ourselves). When configured to use its robust family of plugins and command line tools, it can easily handle the heavy lifting of almost any UI build process, including:
    </p>
    <ul>
      <li>Static site templating and generation</li>
      <li>CSS preprocessing</li>
      <li>JavaScript package management, transpilation, bundling and loading</li>
      <li>Image optimization</li>
      <li>Workflow and static asset management</li>
      <li>Linting and testing</li>
      <li>Local server/middleware hosting</li>
    </ul>
  </Layout>
)

export default IndexPage
