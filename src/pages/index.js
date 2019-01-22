import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="hero">
      <Image style="width:100px;height:auto;"/>
      <img src='../images/logo-steps.png'/>
      <h1>Jonathan Gallo</h1>
      <h1>UX Engineer</h1>
      <p>Welcome to my portfolio site.</p>
      <p>Let's build something great.</p>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
