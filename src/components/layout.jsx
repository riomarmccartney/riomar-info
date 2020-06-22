import React from "react"
import PropTypes from "prop-types"

import Grid from "./Grid"

import "../styles/main.scss"

const Layout = props => {
  return (
    <main className="min-h-screen min-w-full max-w-screen-xl relative px-3 md:px-8 py-4 md:py-6 font-body leading-normal md:text-xl">
      {props.children}
      {props.showGrid && <Grid />}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showGrid: PropTypes.bool,
}

export default Layout
