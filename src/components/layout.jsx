import React from "react"
import PropTypes from "prop-types"
import "./layout.scss"

const Layout = ({ children }) => {
  

  return (
    <main className="px-3 py-2">
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout