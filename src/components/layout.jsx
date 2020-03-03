import React from "react"
import PropTypes from "prop-types"
import "./global.scss"

const Layout = ({ children }) => {
  return (
    <main className="px-3 text-base font-body leading-normal">
      {children}
      
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout