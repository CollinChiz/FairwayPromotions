import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = () => (
  <Layout>
    <SEO title="Success Page" />
    <h1>Purchase Successful!</h1>
    <p>Your purchase was successful! Thank you for your purchase. You will receive a confirmation email with details of your order.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SuccessPage
