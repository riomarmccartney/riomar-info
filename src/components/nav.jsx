import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Nav = () => {
    return (
        <nav className="max-w-m grid grid-columns-4 sm:grid-columns-8 lg:grid-columns-12 grid-gap-4">
            <Link className="col-span-2"to="/" >Riomar Mccartney</Link>
            <Link className=""to="/Visbank/">Visual Bank</Link>
            <Link className=""to="/contact/">Contact</Link>
        </nav>
    )
}

Nav.propTypes = {
    children: PropTypes.element.isRequired
}

export default Nav