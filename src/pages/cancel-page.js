import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CancelPage = () => (
  <Layout>
    <SEO title="Success Page" />
    <h1>Purchase Canceled</h1>
    <p>Your purchase was canceled. Return to homepage to place an order.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CancelPage
