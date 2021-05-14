/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import MainFooter from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-2">{children}</main>
      <MainFooter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
