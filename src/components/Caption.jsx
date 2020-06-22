import React from "react"
import PropTypes from "prop-types"

const Caption = props => (
  <span className="text-small px-1">[<span className="text-xs">{props.label}</span>]</span>
)

Caption.propTypes = {
  label: PropTypes.string,
}

export default Caption
