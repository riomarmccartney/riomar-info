import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/SEO"
import "./global.scss"

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen min-w-full max-w-screen-xl px-3 lg:px-8 font-body leading-normal md:text-lg">
      <SEO />
      {children}
      
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout