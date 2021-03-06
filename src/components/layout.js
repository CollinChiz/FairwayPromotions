/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <br></br>
        <br></br>
        <footer style={{backgroundColor: "navy", color: "white"}}>
          © {new Date().getFullYear()}, Built with
          {` Gatsby.js `}
          <address>Contact: <a style={{color: "white", textDecoration: "underline"}} href="mailto:orders@fairwaypromotionsinc.com">orders@fairwaypromotionsinc.com</a> for orders over 1000 units</address>
          <address>For support: <a style={{color: "white", textDecoration: "underline"}} href="mailto:support@fairwaypromotionsinc.com">support@fairwaypromotionsinc.com</a></address>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
